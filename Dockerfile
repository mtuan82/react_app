FROM node:20-alpine as builder

RUN mkdir /webapp
WORKDIR /webapp

COPY package.json /webapp/package.json
COPY package-lock.json /webapp/package-lock.json

USER root

RUN npm install next@14.1.0
RUN npm install -g 

COPY . .

RUN npm run build

EXPOSE 4000

ENV PORT 4000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["npm","run","start"]