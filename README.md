# EventsManager
[![Maintainability](https://api.codeclimate.com/v1/badges/215078ce2fd0ee631fc5/maintainability)](https://codeclimate.com/github/ObieWalker/EventsManager/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/215078ce2fd0ee631fc5/test_coverage)](https://codeclimate.com/github/ObieWalker/EventsManager/test_coverage)

[![Build Status](https://travis-ci.org/ObieWalker/EventsManager.svg?branch=ft-api-v2)](https://travis-ci.org/ObieWalker/EventsManager)
https://travis-ci.org/ObieWalker/EventsManager.svg?branch=develop

[![Coverage Status](https://coveralls.io/repos/github/ObieWalker/EventsManager/badge.svg?branch=develop)](https://coveralls.io/github/ObieWalker/EventsManager?branch=develop)

https://obievents.herokuapp.com/ <<Herokuuu>>

https://obiewalker.github.io/EventsManager/  <<gh-pages>>

### What the project does
  - This is an events manager application that will be used to connect users that could be event planners or customers wanting to hold an event with appropriate venues.
  - Features

### Why the project is useful
  - This project intends to handle the barriers associated with a user having to physically go to venues to enquire or call up the few venues  they might be aware of. A user can sit in the comfort of their houses with their requirements and make the best possible decision with respect to their limiting factors. 


### Contributing to the project
  - This is a solo project but I got a lot of help from my fellow boot-campers and LFA's.

## TECHNOLOGIES USED

  * Front-end: React/Redux and Materialize (Templates available on my gh-pages).
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
> Send a PUT request to 127.0.0.1:8080/events/ with this in the body `{
  guestno: 'Sunset Cottage,
  eventtype: 'Wedding',
  eventdate: 12/12/2017
}`

## Tests
  - To run tests, use `npm test`

## API ENDPOINTS
<hr>
<table>
  <tr>
      <th>Request Type</th>
      <th>End Point</th>
      <th>Action</th>
      <th>Body</th>
  </tr>
     <tr>
      <td>POST</td>
      <td>/api/v1/users/</td>
      <td>Signup</td>
      <td>
	<pre>{
	username: 'testPerson'
	firstname: 'firstname1',
  lastname: 'lastname1',
	email: 'testingemail@gmail.com',
	password: 'testPassword',
	verifyPassword: 'testPassword'
     }</pre>
     </td>
  </tr>
    </tr>
     <tr>
      <td>POST</td>
      <td>/api/v1/users/login</td>
      <td>Signin</td>
      <td>
	<pre>{
	email: 'email@gmail.com'
	password: 'password1',
      }</pre>
      </td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/events/</td>
      <td>Add Event</td>
      <td>
      <pre>{
	eventtype: 'Birthday',
	eventdate: '13/06/2018',
	guestno: 123
     }</pre>
     </td>
  </tr>  
  <tr>
      <td>PUT</td>
      <td>/api/v1/events/<eventId> </td>
      <td>Modify an event</td>
      <td>
      <pre>{
	eventtype: 'Birthday',
	eventdate: '13/06/2017',
	guestno: 123
     }</pre>
     </td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/centers/</td>
      <td>Add a center</td>
      <td>
      <pre>{
      centername: 'The Coitus Club',
      address: '17, Isaleko',
      location: 'Victoria Island',
      capacity: 300,
      bookstatus: true,
      token: '<token from login>'
      }</pre>
      </td>
  </tr>

  <tr>
      <td>GET</td>
      <td>/api/v1/events/</td>
      <td>All events</td>
      <td></td>
  </tr>
    <tr>
      <td>GET</td>
      <td>/api/v1/centers/1<centerId></td>
      <td>Get a single center</td>
      <td></td>
  </tr>
   
  <tr>
      <td>GET</td>
      <td>/api/v1/centers/</td>
      <td>Get all centers</td>
      <td></td>
  </tr>
  <tr>
      <td>DELETE</td>
      <td>/api/v1/events/2<eventId></td>
      <td>Delete an event</td>
      <td>
      <pre>{
	    token: '<your token from login>'
      }</pre> 
      </td>
  </tr>

   <tr>
      <td>PUT</td>
      <td>/api/v1/centers/1<centerId></td>
      <td>Modify a center</td>
      <td>
      <pre>{
      centername: 'The Virgin Club',
      address: '18, Isaleko',
      location: 'Victoria Island',
      capacity: 301,
      bookstatus: true,
      token: '<token from login>'
      }</pre>
      </td>
  </tr>
</table>