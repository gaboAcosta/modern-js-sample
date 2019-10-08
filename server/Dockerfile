FROM node:12

RUN mkdir /app
COPY . /app

WORKDIR /app
RUN npm install

ENTRYPOINT ["npm"]
CMD ["start"]
