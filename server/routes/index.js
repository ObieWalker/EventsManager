import express from 'express';
import UsersController from '../controllers/usersController';
import EventsController from '../controllers/eventsController';
import CentersController from '../controllers/centersController';
import auth from '../middlewares/authenticator';
import validator from '../middlewares/validator';

// versioning our api
const apiv1 = express.Router();

// account creation and login
apiv1.post('/users', validator.signUpValidator, UsersController.signup);
apiv1.post('/users/login', validator.signInValidator, UsersController.signin);
apiv1.get('/users/', auth.authenticate, UsersController.getAllUsers);
apiv1.put('/users/:id', auth.authenticate, UsersController.setAsAdmin);
apiv1.delete('/users/:id', auth.authenticate, UsersController.deleteUser);


// event routes
apiv1.post(
  '/events', auth.authenticate, validator.eventValidation,
  EventsController.createEvent
);
apiv1.get('/events/', EventsController.allEvents);
apiv1.get('/user/events/', auth.authenticate, EventsController.getUserEvents);
apiv1.get('/user/history/', auth.authenticate, EventsController.getUserHistory);
apiv1.put(
  '/events/:id', auth.authenticate,
  validator.eventValidation, EventsController.editEvent
);
apiv1.delete(
  '/events/:id',
  auth.authenticate, EventsController.deleteEvent
);
apiv1.get(
  '/center/events/:centerId',
  EventsController.getCenterEvents
);
apiv1.delete(
  '/admin/events/:id',
  auth.authenticate, EventsController.cancelEvent
);


// center routes
apiv1.post(
  '/centers', auth.authenticate,
  validator.centerValidation, CentersController.createCenter
);
apiv1.put(
  '/centers/:id', auth.authenticate,
  validator.centerValidation, CentersController.modifyCenter
);
apiv1.get('/centers', CentersController.getAllCenters);
apiv1.get('/centers/:id', CentersController.getCenterDetails);
apiv1.delete('/centers/:id', auth.authenticate, CentersController.deleteCenter);


apiv1.post('/admin/contact/', UsersController.contactAdmin);
export default apiv1;
