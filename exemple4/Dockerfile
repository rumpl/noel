FROM node as base

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM nginx as app

COPY --from=base /app/build /usr/share/nginx/html
