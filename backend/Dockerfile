FROM node:carbon
WORKDIR /usr/src/app

# Copy the source code over
COPY package.json ./
RUN npm install

COPY nodemon.json ./

EXPOSE 5000
CMD [ "npm", "start" ]