FROM node:12

RUN mkdir /app
COPY . /app

WORKDIR /app
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
