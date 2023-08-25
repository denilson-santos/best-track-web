FROM node:14.17.6 

RUN npm install -g npm@7.23 

USER node

WORKDIR /home/node/app