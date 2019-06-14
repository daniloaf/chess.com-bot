FROM node:10

COPY . .

RUN yarn install

CMD yarn start
