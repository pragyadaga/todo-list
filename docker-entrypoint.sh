#!/bin/sh

echo "WAITING FOR MYSQL TO START ====>"

until DB_ENV=docker sequelize db:migrate; do
  >&2 echo "MySql is unavailable - sleeping"
  sleep 4
done

>&2 echo "MySql is up - executing command"
echo "Starting NodeJS App"

DB_ENV=docker npm run dev
