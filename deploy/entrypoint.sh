#!/bin/bash

# Render msmtp config from template with env var defaults
export SMTP_HOST="${SMTP_HOST:-smtp.gmail.com}"
export SMTP_PORT="${SMTP_PORT:-587}"
export SMTP_USER="${SMTP_USER}"
export SMTP_PASSWORD="${SMTP_PASSWORD}"
if command -v envsubst &> /dev/null && [ -f /etc/msmtprc.template ]; then
  envsubst < /etc/msmtprc.template > /etc/msmtprc
fi

# Write .env from environment variables
[ -n "$APP_ENV" ] && echo "APP_ENV=$APP_ENV" > .env
[ -n "$APP_SECRET" ] && echo "APP_SECRET=$APP_SECRET" >> .env
[ -n "$DATABASE_URL" ] && echo "DATABASE_URL=$DATABASE_URL" >> .env
[ -n "$GOOGLE_API_KEY" ] && echo "GOOGLE_API_KEY=$GOOGLE_API_KEY" >> .env
[ -n "$ELASTICSEARCH_HOST" ] && echo "ELASTICSEARCH_HOST=$ELASTICSEARCH_HOST" >> .env
[ -n "$ELASTICSEARCH_INDEX" ] && echo "ELASTICSEARCH_INDEX=$ELASTICSEARCH_INDEX" >> .env
[ -n "$TWITTER_API_KEY" ] && echo "TWITTER_API_KEY=$TWITTER_API_KEY" >> .env
[ -n "$TWITTER_API_SECRET" ] && echo "TWITTER_API_SECRET=$TWITTER_API_SECRET" >> .env
[ -n "$TWITTER_ACCESS_TOKEN" ] && echo "TWITTER_ACCESS_TOKEN=$TWITTER_ACCESS_TOKEN" >> .env
[ -n "$TWITTER_ACCESS_SECRET" ] && echo "TWITTER_ACCESS_SECRET=$TWITTER_ACCESS_SECRET" >> .env
[ -n "$DEEPL_API_KEY" ] && echo "DEEPL_API_KEY=$DEEPL_API_KEY" >> .env
[ -n "$GEMINI_API_KEY" ] && echo "GEMINI_API_KEY=$GEMINI_API_KEY" >> .env
[ -n "$GEMINI_MODEL" ] && echo "GEMINI_MODEL=$GEMINI_MODEL" >> .env
[ -n "$ANTHROPIC_API_KEY" ] && echo "ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY" >> .env
[ -n "$HUGGINGFACE_KEY" ] && echo "HUGGINGFACE_KEY=$HUGGINGFACE_KEY" >> .env
[ -n "$CHROMADB_HOST" ] && echo "CHROMADB_HOST=$CHROMADB_HOST" >> .env
[ -n "$CHROMADB_PORT" ] && echo "CHROMADB_PORT=$CHROMADB_PORT" >> .env
[ -n "$CHROMADB_DATABASE" ] && echo "CHROMADB_DATABASE=$CHROMADB_DATABASE" >> .env
[ -n "$CORS_ALLOW_ORIGIN" ] && echo "CORS_ALLOW_ORIGIN=$CORS_ALLOW_ORIGIN" >> .env
[ -n "$APP_URL" ] && echo "APP_URL=$APP_URL" >> .env
[ -n "$MCP_PROJECT_PASSWORD" ] && echo "MCP_PROJECT_PASSWORD=$MCP_PROJECT_PASSWORD" >> .env
[ -n "$MCP_PROJECT_NAME" ] && echo "MCP_PROJECT_NAME=\"$MCP_PROJECT_NAME\"" >> .env
[ -n "$MCP_TOKEN_LIFETIME" ] && echo "MCP_TOKEN_LIFETIME=$MCP_TOKEN_LIFETIME" >> .env
[ -n "$MCP_CODE_LIFETIME" ] && echo "MCP_CODE_LIFETIME=$MCP_CODE_LIFETIME" >> .env
[ -n "$LOCK_DSN" ] && echo "LOCK_DSN=$LOCK_DSN" >> .env
echo "MAILER_DSN=${MAILER_DSN:-sendmail://default}" >> .env
echo "CONTACT_LEAD_EMAIL=${CONTACT_LEAD_EMAIL:-info@nevercodealone.de}" >> .env

# Fix .env ownership (just written as root)
chown www-data:www-data /var/www/html/.env 2>/dev/null || true

# Fix ownership on persistent volume and upload dirs
chown -R www-data:www-data /var/www/html/var/ 2>/dev/null || true
chown -R www-data:www-data /var/www/html/public/uploads/ 2>/dev/null || true

# Clear stale cache — Symfony rebuilds lazily on first request as www-data
rm -rf /var/www/html/var/cache/*

exec "$@"
