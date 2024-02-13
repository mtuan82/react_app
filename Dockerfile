FROM node:18-alpine as builder

RUN mkdir /webapp
WORKDIR /webapp

RUN npm install next@latest react@latest react-dom@latest

COPY package.json /webapp/package.json
COPY package-lock.json /webapp/package-lock.json

RUN npm install 

COPY . ./webapp

EXPOSE 4000

ENV PORT 4000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["npm","run","dev"]