#!/bin/bash

. bin/load-env

echo "APP_ENV=${APP_ENV}" >> /var/www/html/.env
echo "APP_SECRET=${APP_SECRET}" >> /var/www/html/.env
echo "DATABASE_URL=${DATABASE_URL}" >> /var/www/html/.env
echo "MAIL_URL=${MAIL_URL}" >> /var/www/html/.env
echo "SULU_ADMIN_EMAIL=${SULU_ADMIN_EMAIL}" >> /var/www/html/.env
echo "GOOGLE_API_KEY=${GOOGLE_API_KEY}" >> /var/www/html/.env

exec "$@"
