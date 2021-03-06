FROM node:11.10.0-alpine

WORKDIR /app

RUN npm install sequelize-cli -g

COPY package*.json ./

RUN npm install --quiet

COPY . ./

WORKDIR /app/client

RUN npm install --quiet

# Update apk and install bash
# RUN apk update && apk add bash

WORKDIR /app

RUN chmod +x docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
