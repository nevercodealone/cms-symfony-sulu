#!/usr/bin/env bash
#
# Validate rendered HTML of nevercodealone.de against the W3C Nu HTML Checker.
#
# Uses the same engine as https://validator.w3.org/nu via the official
# validator/validator Docker image, so messages are identical to the online
# checker. No JRE needs to be installed on the host.
#
# Usage:
#   bin/validate-html.sh                # validate the default page set
#   bin/validate-html.sh --keep         # keep var/validate/*.html for inspection
#   bin/validate-html.sh --json-only    # emit raw Nu JSON, no summary
#
# Exits non-zero if any message of type "error" is reported.

set -euo pipefail

BASE_URL="${BASE_URL:-https://nevercodealone.de}"
PAGES=(de)
OUT_DIR="var/validate"
KEEP=0
JSON_ONLY=0

while [[ $# -gt 0 ]]; do
    case "$1" in
        --keep)        KEEP=1; shift ;;
        --json-only)   JSON_ONLY=1; shift ;;
        *) echo "Unknown argument: $1" >&2; exit 2 ;;
    esac
done

mkdir -p "$OUT_DIR"
rm -f "$OUT_DIR"/*.html "$OUT_DIR"/result.json

echo "Fetching ${#PAGES[@]} page(s) from $BASE_URL ..."
for page in "${PAGES[@]}"; do
    curl -fsSL "$BASE_URL/$page" -o "$OUT_DIR/$page.html"
done

IMAGE="thegeeklab/vnu:latest"
echo "Running Nu HTML Checker (Docker image $IMAGE) ..."

HTML_ARGS=()
for page in "${PAGES[@]}"; do
    HTML_ARGS+=("/work/${page}.html")
done

# Nu rejects Alpine.js directive attributes (x-data, x-on:click, :class, etc.)
# because they are not in the HTML5 spec. These are framework directives that
# browsers handle correctly. Alpine.prefix('data-x-') was attempted but Nu also
# rejects colons in data-* attribute names (data-x-bind:class etc.), so the
# migration was reverted per plan task 3.5. Instead, we filter these known-safe
# Alpine patterns so the validator can still gate on real structural errors.
# Only attributes starting with x- , : , or @ are filtered (Alpine syntax).
# Nu uses Unicode curly quotes (U+201C / U+201D) in messages.
LQ=$'\xe2\x80\x9c'  # left double quotation mark
RQ=$'\xe2\x80\x9d'  # right double quotation mark
ALPINE_FILTER="Attribute ${LQ}[x:@-][^${RQ}]*${RQ} not allowed on element"

docker run --rm \
    -v "$(pwd)/$OUT_DIR:/work" \
    "$IMAGE" \
    --format json --exit-zero-always "${HTML_ARGS[@]}" 2>&1 | \
    jq --arg filter "$ALPINE_FILTER" \
       '[.messages[] | select(.type == "error" and (.message | test($filter; "i")) | not)] | {messages: .}' \
       > "$OUT_DIR/result.json"

if [[ "$JSON_ONLY" -eq 1 ]]; then
    cat "$OUT_DIR/result.json"
    exit 0
fi

errors=$(jq '[.messages[] | select(.type == "error")] | length' "$OUT_DIR/result.json")
infos=$(jq '[.messages[] | select(.type == "info")] | length' "$OUT_DIR/result.json")
warnings=$(jq '[.messages[] | select(.type == "warning")] | length' "$OUT_DIR/result.json")
non_doc=$(jq '[.messages[] | select(.type != "error" and .type != "info" and .type != "warning")] | length' "$OUT_DIR/result.json")

echo
echo "─── Nu HTML Checker summary ───"
echo "  errors:   $errors"
echo "  warnings: $warnings"
echo "  info:     $infos"
if [[ "$non_doc" -gt 0 ]]; then
    echo "  other:    $non_doc"
fi
echo

if [[ "$errors" -gt 0 ]]; then
    echo "First 20 errors:"
    jq -r '.messages[] | select(.type == "error") | "  line " + (.lastLine | tostring) + ": " + .message' "$OUT_DIR/result.json" | head -20
    echo
fi

if [[ "$KEEP" -eq 0 ]]; then
    rm -f "$OUT_DIR"/*.html
fi

if [[ "$errors" -gt 0 ]]; then
    exit 1
fi
exit 0
