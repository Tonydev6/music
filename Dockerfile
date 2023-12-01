FROM node:18-alpine

WORKDIR /music

COPY package.json .

RUN npm install  

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
