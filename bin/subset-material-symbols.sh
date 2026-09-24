#!/usr/bin/env bash
#
# Subset the self-hosted Material Symbols Outlined variable font to exactly
# the icons used by this project. The full font (all ~3700 icons, ~1.1 MB) is
# downloaded once from Google Fonts; this script shrinks it to a few KB.
#
# HOW IT WORKS:
# Subsetting by --text alone keeps every icon whose name is spelled from the
# same letters (still ~660 KB). Instead each icon is subset by its official
# PUA codepoint (see the .codepoints file in google/material-design-icons) and
# the name letters are kept only as ligature components — so exactly the 13
# listed ligatures survive and nothing else.
#
# WHEN TO RE-RUN:
# - A new icon name is added to templates/components/qualified-contact.html.twig
#   (hardcoded spans) or to src/ContactForm/QuestionTree.php (service icons).
#   card-trio icons are inline SVGs and do NOT use this font.
# - The font itself is updated to a new Google Fonts version (re-check the
#   codepoints when bumping the version).
#
# USAGE:
#   bin/subset-material-symbols.sh [path-to-full-woff2]
#
# The optional argument is the full (unsubsetted) woff2; if omitted the script
# expects it at /tmp/material-symbols-outlined-full.woff2. The result replaces
# assets/website/fonts/material-symbols-outlined.woff2 — afterwards run
# `npm run build` and commit the hashed build artifacts.
#
# Requires: pip3 install --user --break-system-packages fonttools brotli uharfbuzz
set -euo pipefail

FULL_FONT="${1:-/tmp/material-symbols-outlined-full.woff2}"
TARGET="assets/website/fonts/material-symbols-outlined.woff2"

# Every icon used in this repo: name + PUA codepoint. Keep in sync with:
#   templates/components/qualified-contact.html.twig
#   src/ContactForm/QuestionTree.php
ICONS=(
    "accessibility_new e92c"
    "analytics ef3e"
    "arrow_back e5c4"
    "arrow_forward e5c8"
    "calendar_today e935"
    "check e668"
    "check_circle f0be"
    "close e5cd"
    "expand_more e5cf"
    "rocket_launch eb9b"
    "schedule efd6"
    "send e163"
    "terminal eb8e"
)

NAMES="$(printf '%s\n' "${ICONS[@]}" | awk '{printf "%s ", $1}')"
TEXT="$NAMES"
UNICODES="$(printf '%s\n' "${ICONS[@]}" | cut -d' ' -f2 | sed 's/^/U+/' | paste -sd, -)"

if [[ ! -f "$FULL_FONT" ]]; then
    echo "Full font not found at $FULL_FONT" >&2
    echo "Download it first, e.g.:" >&2
    echo "  curl -o '$FULL_FONT' 'https://fonts.gstatic.com/s/materialsymbolsoutlined/v374/kJEPBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzBwG-RpA6RzaxHMPdY40KH8nGzv3fzfVJO1USv9ls.woff2'" >&2
    exit 1
fi

pyftsubset "$FULL_FONT" \
    --output-file="$TARGET" \
    --flavor=woff2 \
    --unicodes="$UNICODES" \
    --text="$TEXT" \
    --layout-features='*' \
    --no-layout-closure \
    --name-IDs='*' \
    --notdef-glyph \
    --notdef-outline

echo "Subset written to $TARGET ($(stat -c%s "$TARGET") bytes, was $(stat -c%s "$FULL_FONT"))"

# Self-check: shape every icon name — each must produce exactly one glyph
# (the ligature), and no glyph may be .notdef. This is what the browser does.
# uharfbuzz cannot read woff2 directly, so the subset is decompressed to a
# temporary TTF first.
python3 - "$TARGET" $NAMES <<'PY'
import os
import sys
import tempfile

import uharfbuzz as hb
from fontTools.ttLib import TTFont

path, names = sys.argv[1], sys.argv[2:]

font = TTFont(path)
font.flavor = None
tmp = tempfile.mktemp(suffix=".ttf")
try:
    font.save(tmp)
    hb_font = hb.Font(hb.Face(hb.Blob.from_file_path(tmp)))

    failed = []
    for name in names:
        buf = hb.Buffer()
        buf.add_str(name)
        buf.guess_segment_properties()
        hb.shape(hb_font, buf)
        glyphs = [g.codepoint for g in buf.glyph_infos]
        if len(glyphs) != 1 or 0 in glyphs:
            failed.append(f"{name} -> {len(glyphs)} glyph(s), notdef involved: {0 in glyphs}")

    if failed:
        print("ERROR: ligature check failed:", *failed, sep="\n  ", file=sys.stderr)
        sys.exit(1)
    print(f"OK: all {len(names)} icon ligatures shape to a single glyph.")
finally:
    os.remove(tmp)
PY
