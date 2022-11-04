FROM node:14.21.0-alpine3.16

COPY ./app /app

WORKDIR /app

RUN npm ci

RUN npm run build

CMD [ "npx", "serve", "build" ]