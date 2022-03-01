#Import nodejs image
FROM node:erbium

WORKDIR /app
 
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7521

CMD ["npm", "start"]