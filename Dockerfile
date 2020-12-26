FROM node:14-alpine as builder
WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM node:14-alpine
WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production
COPY --from=builder /usr/app/build ./build/

#COPY .env ./build/
COPY .env ./
# WORKDIR ./build/

EXPOSE 3000
CMD node ./build/index.js
