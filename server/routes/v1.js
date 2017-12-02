import express from 'express'
import UsersController from '../controllers/usersController'
import EventsController from '../controllers/eventsController'
import CentersController from '../controllers/centersController'
import auth from '../middlewares/authenticator'
import validator from '../middlewares/validator'

// versioning our api
const apiv1 = express.Router()

// account creation and login
apiv1.post('/users/', validator.signUpValidator, UsersController.signup)
apiv1.post('/users/login', validator.signInValidator, UsersController.signin)

// create a new event
apiv1.post('/events', auth.authenticate, validator.createEventValidation, EventsController.createEvent)
// return a users events
// apiv1.get('/users/:userId/events', EventsController.allUsersEvents);
// modify an event
apiv1.get('/events/', EventsController.allEvents)
apiv1.put('/events/:id', auth.authenticate, EventsController.editEvent)
// delete an event
apiv1.delete('/events/:id', auth.authenticate, EventsController.deleteEvent)

// add new center
apiv1.post('/centers', auth.authenticate, validator.createCenterValidation, CentersController.createCenter)
// edit a center's details
apiv1.put('/centers/:id', auth.authenticate, CentersController.modifyCenter)
// get all centers
apiv1.get('/centers', CentersController.getAllCenters)
// get center details
apiv1.get('/centers/:id', CentersController.getCenterDetails)
// delete a center
apiv1.delete('/centers/:id', CentersController.deleteCenter)

export default apiv1
