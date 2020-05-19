FROM node:13-alpine

WORKDIR /client/dist

COPY package*.json ./

RUN npm cache clean --force && npm install

EXPOSE 3000

CMD [ "npm","run","start" ]

COPY . .


