<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h3 align="center">Note-Taking Application with NestJS</h3>

<p align="center">
  A simple note-taking application built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/common"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

---

## Description

This is a simple note-taking application built with NestJS, a progressive Node.js framework that enables you to create efficient and scalable server-side applications. The application allows users to create, view, edit, and delete notes. Each note has a timestamp, content, category, and an option to mark it as archived.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
You can run the application using Docker and Docker Compose. The app is set up to use PostgreSQL as its database and includes a prefilled init.sql script to populate the database with initial data.

To start the app using Docker Compose, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your machine.
2. Clone this repository.
3. Create a `.env` file in the root folder and set the required environment variables for PostgreSQL (e.g., POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB).
4. Place your `init.sql` file in the root folder to populate the database with initial data.
5. Open a terminal and navigate to the root folder of the cloned repository.
6. Run the following command to start the app and the PostgreSQL database:

```bash
$ docker-compose build

$ docker-compose up
```
## Endpoints

### Get All Notes
**URL:** `/notes`   
**Method:** `GET`   
**Description:** Retrieve all notes.  
**Response:** Array of all notes.   

### Get Note by ID
**URL:** `/notes/:id`   
**Method:** `GET`   
**Description:** Retrieve a specific note by its ID.  
**Response:** Note object with the specified ID.  

### Create New Note
**URL:** `/notes`  
**Method:** `POST`  
**Description:** Create a new note.  
**Request Body:**  
```json
{
  "time": "2023-07-30T10:00:00Z",
  "content": "Complete project proposal",
  "category": "Task",
  "archived": false
}
```
### Edit Note
**URL:** `/notes/:id`   
**Method:** `PATCH`  
**Description:** Edit an existing note by its ID.  
**Request Body:**  
```json
{
  "time": "2023-07-30T11:30:00Z",
  "content": "Completed project proposal",
  "category": "Task",
  "archived": true
}
```
### Delete Note
**URL:** /notes/:id   
**Method:** DELETE  
**Description:** Delete a note by its ID.  
**Request Body:** Success message.   

```json
{
  "message": "Note with ID 1 has been deleted successfully."
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
