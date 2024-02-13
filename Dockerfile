FROM node:18-alpine as builder

RUN mkdir /webapp
WORKDIR /webapp

RUN npm install next@latest react@latest react-dom@latest

COPY package.json /webapp/package.json
COPY package-lock.json /webapp/package-lock.json

RUN npm install 

COPY . ./webapp

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir /webapp/.next
RUN chown nextjs:nodejs .next

USER root

EXPOSE 4000

ENV PORT 4000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["npm","run","dev"]