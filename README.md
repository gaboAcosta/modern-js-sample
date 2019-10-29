#Sample Modern JS Application

This repository is intended to be the base of a book/video/tutorial bundle to teach those wanting to learn more about modern Fullstack JS development

It is composed of  a backend using Node 12, HapiJS, Swagger, PostgreSQL and Sequelize. A frontend composed of React + MobX

The biggest focus of the application is to teach good architecture practices, but most of all unit, functional and end to end testing.

The intention is that a Junior developer could use this to get to the next level on their career.

This sample asumes the reader has basic knowledge of JS and NodeJS

Prerequisites: Docker Installed and working

Steps to get the app up and running:

Step 1) Clone the repo

Step 2) Run `docker-compose build`

Step 3) Run the db container in detached mode`docker-compose up -d postgres`

Step 4) Run `docker-compose run app run db:create`

Step 5) Run the db migrations `docker-compose run app run db:migrate`

Step 6) Start the system `docker-compose up`

After this initial steps, only step number 6 is necessary to work on development mode.