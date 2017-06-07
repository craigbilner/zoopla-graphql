FROM node:8.0.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY yarn.lock package.json /usr/src/app/
RUN yarn
COPY . /usr/src/app
EXPOSE 8080
CMD [ "npm", "start" ]
