#!/bin/sh

echo "starting"
DB_ENV=docker sequelize db:migrate

DB_ENV=docker npm run dev
