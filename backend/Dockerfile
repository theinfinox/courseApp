FROM node:18.9.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

COPY ./../../../.env .

EXPOSE 4000:4000

CMD ["node", "app.js"]

