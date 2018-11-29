FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1128

RUN npm run webpack

CMD ["npm", "start"]
