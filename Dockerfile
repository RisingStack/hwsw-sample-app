FROM node:8.11.1-alpine

WORKDIR /sample-app

COPY package.json ./

RUN npm install --production

COPY . ./

EXPOSE 3000

CMD ["node", "."]
