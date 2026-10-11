# Skill: Restore Uploads from Backup

Replace local Sulu media files (`var/uploads`) with the contents of a backup
archive from the live system, e.g. `uploads.tar.gz`.

## When to Use (Triggers)

- Local images/media are missing or broken (404 in admin or frontend)
- A live DB dump was imported, but local media files are older than the dump
- `var/uploads` is stale, partial, or after a fresh clone/checkout
- User asks to "sync uploads", "restore media", "replace var/uploads from backup"

## Sulu Storage Layout (know what you touch)

| Path | Content | Safe to delete? |
|------|---------|-----------------|
| `var/uploads/media/` | Original uploaded media in numbered dirs (`01` … `99`) | Only if replaced from backup |
| `public/uploads/media/` | Generated format cache (thumbnail dirs like `1500x1000`, `1920x1280`) | Yes — Sulu regenerates formats on demand |

Media is resolved from DB records + filesystem at request time. No cache clear
is required after replacing files.

## Workflow

### 1. Locate and inspect the backup

```bash
tar -tzf uploads.tar.gz | head -20        # check path prefix (expect var/uploads/...)
tar -tzf uploads.tar.gz | grep -v '/$' | wc -l   # file count for later verification
```

- Archive paths must start with `var/uploads/` → extract in project root.
- If the archive prefix differs (e.g. starts with `uploads/` or `./`),
  adjust with `--strip-components=N` or `-C` in step 3.

### 2. Preflight

```bash
df -h .                    # need: archive size + extracted size free
du -sh var/uploads public/uploads 2>/dev/null
git check-ignore -v uploads.tar.gz   # must be ignored; if not, add to .gitignore
```

Ask the user whether to delete the old `var/uploads` outright or keep it as
`var/uploads.old` until verification passes.

### 3. Replace

```bash
rm -rf var/uploads public/uploads/media
tar -xzf uploads.tar.gz
```

`public/uploads/media` (format cache) is cleared so no stale thumbnails are
served; Sulu regenerates them on first request.

### 4. Verify

```bash
find var/uploads -type f | wc -l   # must match archive file count from step 1
find var/uploads -type f -size +1M | head -3 | xargs file   # spot-check: real images, not HTML error pages
```

Optionally open any page in the frontend and confirm images render.

### 5. Cleanup

After verification passes, delete the archive to free disk space
(only with the user's consent — the backup cannot be recovered once removed):

```bash
rm uploads.tar.gz
```

## Troubleshooting

- **Wrong path prefix in archive**: `tar -xzf uploads.tar.gz --strip-components=1 -C var/uploads` (adjust N to the actual depth)
- **Permissions (DDEV)**: extracted files are owned by the host user; DDEV php-fpm runs as the same user — usually no fix needed. If a deployment container uses a different user, run `ddev exec chown -R www-data:www-data var/uploads` inside the target environment only.
- **Images still broken after restore**: the DB references media IDs — if the live DB was not imported, IDs won't match. Import the live DB dump first.
- **Archive not ignored**: add `/uploads.tar.gz` to `.gitignore` immediately (a 1+ GB accidental commit will break the repo).

## Notes

- Never commit the archive or `var/uploads` content; both are git-ignored.
- The format cache (`public/uploads/media`) does not need to be backed up or restored.
