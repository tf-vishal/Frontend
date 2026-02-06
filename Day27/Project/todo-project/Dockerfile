FROM node:21-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .


EXPOSE 5173
CMD [ "npm","run","dev","--","--host" ]
