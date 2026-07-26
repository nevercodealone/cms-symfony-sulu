# Environment Variables

## Flow

```
GitLab CI/CD vars (UI)
   ↓ auto-propagate to job env
docker-compose.conversis.yml → webserver.environment:
   ↓ forwards into container
deploy/entrypoint.sh
   ↓ writes to /var/www/html/.env
Symfony loads at runtime
```

## Add a new variable

1. GitLab UI → Settings → CI/CD → Variables → add (mask + protect for secrets)
2. `docker-compose.conversis.yml` `webserver.environment:` — add `- VAR=$VAR`
3. `deploy/entrypoint.sh` — add `[ -n "$VAR" ] && echo "VAR=$VAR" >> .env`
4. `.env` — add empty placeholder `VAR=`

Do NOT add to `.gitlab-ci.yml` `variables:` blocks — auto-propagation handles it. Forwarding undefined vars produces literal `$VARNAME` strings.

## Example trace: `DB_HOST`

Real working var. Copy this pattern.

**Step 1 — GitLab UI**: `DB_HOST=mariadb` (protect, no mask needed)

**Step 2 — `.gitlab-ci.yml`**: NOT forwarded. Only interpolated inside `DATABASE_URL`:
```yaml
DATABASE_URL: mysql://$DB_USER:$DB_PWD@$DB_HOST:3306/$DB_NAME
```

**Step 3 — `docker-compose.conversis.yml`**:
```yaml
environment:
  - DB_HOST=$DB_HOST
```

**Step 4 — `deploy/entrypoint.sh`**: skipped — `DB_HOST` not written to `.env` because Symfony reads only `DATABASE_URL`:
```bash
[ -n "$DATABASE_URL" ] && echo "DATABASE_URL=$DATABASE_URL" >> .env
```

**Result in production**:
```
$ env | grep DB_HOST
DB_HOST=mariadb              ← from compose, real value
$ cat /var/www/html/.env | grep DATABASE_URL
DATABASE_URL=mysql://...     ← from entrypoint, real value
```

## Registered vars

| Var | Layer | Notes |
|-----|-------|-------|
| `APP_ENV` `APP_SECRET` `APP_URL` | all | Symfony core |
| `DATABASE_URL` | gitlab compose | built from `$DB_USER:$DB_PWD@$DB_HOST` |
| `DB_HOST` `DB_NAME` `DB_USER` `DB_PWD` | compose | CI/CD vars, not in `.env` |
| `MAILER_DSN` `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASSWORD` | compose+entrypoint | msmtp config |
| `CONTACT_LEAD_EMAIL` | compose+entrypoint | recipient |
| `GEMINI_API_KEY` `GEMINI_MODEL` | compose+entrypoint | AI |
| `ANTHROPIC_API_KEY` `HUGGINGFACE_KEY` `DEEPL_API_KEY` | compose+entrypoint | AI |
| `GOOGLE_API_KEY` | compose+entrypoint | YouTube API |
| `TWITTER_API_KEY` `TWITTER_API_SECRET` `TWITTER_ACCESS_TOKEN` `TWITTER_ACCESS_SECRET` | compose+entrypoint | social |
| `CHROMADB_HOST` `CHROMADB_PORT` `CHROMADB_DATABASE` | compose+entrypoint | vector store |
| `MCP_PROJECT_PASSWORD` `MCP_PROJECT_NAME` `MCP_TOKEN_LIFETIME` `MCP_CODE_LIFETIME` | compose+entrypoint | MCP auth |
| `LOCK_DSN` `CORS_ALLOW_ORIGIN` | compose+entrypoint | infra |
| `TELEGRAM_BOT_TOKEN` `TELEGRAM_DEFAULT_CHAT_ID` | compose+entrypoint | outbound notifications (same bot as Hermes) |

## GitLab UI flags

- **Mask** for secrets (value must match `[a-zA-Z0-9_+/=:@.-]`, min 8 chars)
- **Protect** for secrets (limits to protected branches like `main`)
- Unmasked = plain text in CI logs to anyone with Reporter access

## Verify after deploy

```bash
docker exec <SHORTCODE>-web cat /var/www/html/.env | grep VAR
# Real value  → CI/CD var set correctly
# $VARNAME    → CI/CD var missing (was forwarded in .gitlab-ci.yml)
# empty       → entrypoint.sh line missing or env var empty in container
```
