# EventsManager
[![Maintainability](https://api.codeclimate.com/v1/badges/215078ce2fd0ee631fc5/maintainability)](https://codeclimate.com/github/ObieWalker/EventsManager/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/215078ce2fd0ee631fc5/test_coverage)](https://codeclimate.com/github/ObieWalker/EventsManager/test_coverage)

[![Build Status](https://travis-ci.org/ObieWalker/EventsManager.svg?branch=develop)](https://travis-ci.org/ObieWalker/EventsManager)

[![Coverage Status](https://coveralls.io/repos/github/ObieWalker/EventsManager/badge.svg?branch=develop)](https://coveralls.io/github/ObieWalker/EventsManager?branch=develop)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://obievents.herokuapp.com/ <<Heroku>>

https://obiewalker.github.io/EventsManager/  <<gh-pages>>

### What the project does
  - This is an events manager application that will be used to connect users that could be event planners or customers wanting to hold an event with appropriate venues.
  - Features

### Why the project is useful
  - This project intends to handle the barriers associated with a user having to physically go to venues to enquire or call up the few venues  they might be aware of. A user can sit in the comfort of their houses with their requirements and make the best possible decision with respect to their limiting factors. 


### Contributing to the project
  - This was intended to be a personal project but I have gotten help and feedback from colleagues and learning facilitators which were duly implemented.

## TECHNOLOGIES USED

  * Front-end: React/Redux and Materialize (Templates available on my gh-pages).
  * Back-end: Node/Expressjs + Sequelize/Postgres
  * Libraries: nodemon, Babel, eslint, etc.
  * Backend Test: Mocha/Chai
  * Frontend Test: Enzyme and Jest

### How users can get started with the project
  - Ensure you have a system with atleast 8GB RAM and follow the instructions below

## For installation
* Install Node JS and Postgresql
* Clone the repo.
* [cd] into the root of the project directory.
* Run `npm install` to install all 
* Create a .env file with values for the following keys:
```
SECRET=
PORT=
UPLOAD_PRESET=
DEFAULT_IMAGE=
CLOUDINARY_URL=
MAILER_EMAIL=
MAILER_PASSWORD=
```
* To run on **development** environment, Run `npm run start:dev` to start the server
 and`npm run build:dev` for the client side.
 * To run on **Production** environment, Run `npm start` to start the application.
* Open your browser on localhost:3000


## Tests
  - To run tests, use `npm test`

### ACTORS

Regular users can:
- Register and sign in.
- Add events.
- Modify their own events.
- Delete their own events.
- View all their events.
- View all centers.

Admin Users can:
- Add a center.
- Modify a center.
- Delete a center.
- Cancel events.
- View all events and centers.
- Make a regular user an admin.
- Delete a user and invalidate the users token.

## The API Endpoints

**User**
***Register***
* `POST` https://obievents.herokuapp.com/api/v1/users

***Login***
* `POST` https://obievents.herokuapp.com/api/v1/users/login

***All Users***
* `GET` https://obievents.herokuapp.com/api/v1/users

***Make user admin***
* `PUT` https://obievents.herokuapp.com/api/v1/users/:id

***Delete a user***
* `DELETE` https://obievents.herokuapp.com/api/v1/users/:id


**Center**
***Create a center***
* `POST` https://obievents.herokuapp.com/api/v1/centers

***Get all centers***
* `GET`  https://obievents.herokuapp.com/api/v1/centers

***Get a center***
* `GET`  https://obievents.herokuapp.com/api/v1/centers/:id

***Modify a center***
* `PUT`  https://obievents.herokuapp.com/api/v1/centers/:id

***Delete a center***
* `DEL`  https://obievents.herokuapp.com/api/v1/centers/:id


**Events**
***Create an Event***
* `POST` https://obievents.herokuapp.com/api/v1/events

***Get a users Events***
* `GET`  https://obievents.herokuapp.com/api/v1/user/events/

***Get all Events***
* `GET`  https://obievents.herokuapp.com/api/v1/events/

***Modify an Event***
* `PUT`  https://obievents.herokuapp.com/api/v1/events/:id

***Delete an Event***
* `DEL`  https://obievents.herokuapp.com/api/v1/events/:id

***Get all center Events***
* `DEL`  https://obievents.herokuapp.com/api/v1/center/events/:centerId

***Cancel an Event***
* `DEL`  https://obievents.herokuapp.com/api/v1/admin/events/:id
