# EventsManager
[![Maintainability](https://api.codeclimate.com/v1/badges/215078ce2fd0ee631fc5/maintainability)](https://codeclimate.com/github/ObieWalker/EventsManager/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/215078ce2fd0ee631fc5/test_coverage)](https://codeclimate.com/github/ObieWalker/EventsManager/test_coverage)

[![Build Status](https://travis-ci.org/ObieWalker/EventsManager.svg?branch=ft-api-v2)](https://travis-ci.org/ObieWalker/EventsManager)
https://travis-ci.org/ObieWalker/EventsManager.svg?branch=develop

[![Coverage Status](https://coveralls.io/repos/github/ObieWalker/EventsManager/badge.svg?branch=develop)](https://coveralls.io/github/ObieWalker/EventsManager?branch=develop)



### What the project does
  - This is an events manager application that will be used to connect users that could be event planners or customers wanting to hold an event with appropriate venues.
  - Features

### Why the project is useful
  - This project intends to handle the barriers associated with a user having to physically go to venues to enquire or call up the few venues  they might be aware of. A user can sit in the comfort of their houses with their requirements and make the best possible decision with respect to their limiting factors. 


### Contributing to the project
  - This is a solo project but I got a lot of help from my fellow boot-campers and LFA's.

## TECHNOLOGIES USED

  * Front-end: React/Redux (To be implemented) + Materialize
  * Back-end: Node/Expressjs + Sequelize/Postgres
  * Libraries: nodemon, Babel, eslint, etc.
  * Test: Mocha/Chai

### How users can get started with the project
  - Ensure you have a system with atleast 8GB RAM and follow the instructions below

## For installation
* Clone the repo.
* cd into the server folder
* Run npm install to install all dependencies
* Run npm run start to start the server

## Testing with POSTMAN
> Send a PUT request to 127.0.0.1:8080/events/1 with this in the body `{
  centerId: 1015,
  centerName: 'Sunset Cottage,
  Location: 'Victoria Island, Lagos',
  capacity: 200,
  facility: ['Projector', 'Stage']
}`

## Tests
  - To run tests, use `npm test`
