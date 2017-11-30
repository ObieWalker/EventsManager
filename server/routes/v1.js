import express from 'express';
import UsersController from '../controllers/usersController';
import EventsController from '../controllers/eventsController';
import CentersController from '../controllers/centersController';

// versioning our api
const apiv1 = express.Router();

// account creation and login
apiv1.post('/users/', UsersController.signup)
apiv1.post('/users/login', UsersController.signin)

// create a new event
apiv1.post('/events', EventsController.createEvent);
// return all events
apiv1.get('/events', EventsController.allEvents);
// return a users events
apiv1.get('/users/:userId/events', EventsController.allUsersEvents);
// modify an event
apiv1.put('/events/:id', EventsController.editEvent);
// delete an event
apiv1.delete('/events/:id', EventsController.deleteEvent);

// add new center
apiv1.post('/centers', CentersController.createCenter)
// edit a center's details
apiv1.put('/centers/:id', CentersController.modifyCenter)
// get all centers
apiv1.get('/centers', CentersController.getAllCenters)
// get center details
apiv1.get('/centers/:id', CentersController.getCenterDetails)
// delete a center
apiv1.delete('/centers/:id', CentersController.deleteCenter)

export default apiv1;







