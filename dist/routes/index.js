'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _usersController = require('../controllers/usersController');

var _usersController2 = _interopRequireDefault(_usersController);

var _eventsController = require('../controllers/eventsController');

var _eventsController2 = _interopRequireDefault(_eventsController);

var _centersController = require('../controllers/centersController');

var _centersController2 = _interopRequireDefault(_centersController);

var _authenticator = require('../middlewares/authenticator');

var _authenticator2 = _interopRequireDefault(_authenticator);

var _validator = require('../middlewares/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// versioning our api
var apiv1 = _express2.default.Router();

// account creation and login
apiv1.post('/users', _validator2.default.signUpValidator, _usersController2.default.signup);
apiv1.post('/users/login', _validator2.default.signInValidator, _usersController2.default.signin);
apiv1.get('/users/', _authenticator2.default.authenticate, _usersController2.default.getAllUsers);
apiv1.put('/users/:id', _authenticator2.default.authenticate, _usersController2.default.setAsAdmin);
apiv1.delete('/users/:id', _authenticator2.default.authenticate, _usersController2.default.deleteUser);

// event routes
apiv1.post('/events', _authenticator2.default.authenticate, _validator2.default.eventValidation, _eventsController2.default.createEvent);
apiv1.get('/events/', _eventsController2.default.allEvents);
apiv1.get('/user/events/', _authenticator2.default.authenticate, _eventsController2.default.getUserEvents);
apiv1.get('/user/history/', _authenticator2.default.authenticate, _eventsController2.default.getUserHistory);
apiv1.put('/events/:id', _authenticator2.default.authenticate, _validator2.default.eventValidation, _eventsController2.default.editEvent);
apiv1.delete('/events/:id', _authenticator2.default.authenticate, _eventsController2.default.deleteEvent);
apiv1.get('/center/events/:centerId', _eventsController2.default.getCenterEvents);
apiv1.delete('/admin/events/:id', _authenticator2.default.authenticate, _eventsController2.default.cancelEvent);

// center routes
apiv1.post('/centers', _authenticator2.default.authenticate, _validator2.default.centerValidation, _centersController2.default.createCenter);
apiv1.put('/centers/:id', _authenticator2.default.authenticate, _validator2.default.centerValidation, _centersController2.default.modifyCenter);
apiv1.get('/centers', _centersController2.default.getAllCenters);
apiv1.get('/centers/:id', _centersController2.default.getCenterDetails);
apiv1.delete('/centers/:id', _authenticator2.default.authenticate, _centersController2.default.deleteCenter);

apiv1.post('/admin/contact/', _usersController2.default.contactAdmin);
exports.default = apiv1;