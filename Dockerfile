FROM node:16-alpine

WORKDIR /var/www/app

COPY package.json .
COPY yarn.lock .

RUN yarn install
COPY . .



CMD [ "yarn", "dev" ]