FROM node:latest

RUN mkdir -p /usr/src/www && npm install -g nodemon
WORKDIR /usr/src/www
COPY ./src ./src
ADD package.json ./package.json
RUN npm install
CMD nodemon src/www