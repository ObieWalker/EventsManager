import express from 'express';
import UsersController from '../controllers/usersController';
import EventsController from '../controllers/eventsController';
import CentersController from '../controllers/centersController';
import validator from '../authenticate/validator';
import validate from '../authenticate/validator';

//not versioning our api
const apiv1 = express.Router();


console.log(typeof(UsersController));
//account creation and login
apiv1.post('/users/', UsersController.signup);
apiv1.post('/users/login', validate.signInValidator, UsersController.signin);


//create a new event
apiv1.post('/events', validate.createEventValidation, EventsController.createEvent);
//return a users events
apiv1.get('/users/:userId/events', EventsController.allUsersEvents);
//modify an event
apiv1.put('/events/:id', validate.createEventValidation, EventsController.editEvent);
//delete an event
apiv1.delete('/events/:id', EventsController.deleteEvent);



//add new center
apiv1.post('/centers', validate.createCenterValidation, CentersController.createCenter)
//edit a center's details
apiv1.put('/centers/:id', validate.createCenterValidation, CentersController.modifyCenter)
//get all centers
apiv1.get('/centers', CentersController.getAllCenters)
//get center details
apiv1.get('/centers/:id', CentersController.getCenterDetails)
//delete a center
apiv1.delete('/centers/:id', CentersController.deleteCenter)

export default apiv1;







