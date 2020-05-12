FROM node:alpine as builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod

COPY . .
RUN yarn build

FROM caddy:2-alpine

WORKDIR /app

COPY --from=builder /app/Caddyfile ./
COPY --from=builder /app/build ./build

EXPOSE 8080

CMD ["caddy", "run"]
