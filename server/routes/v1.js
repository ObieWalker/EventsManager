import express from 'express';
import userController from '../controllers/eventController';


const app = express.Router();

//returns all events by date
//I intend to use later for searching through filter
app.get('/events', eventController.listEventsByDate)
//creates an event
	 .post('/events', eventController.createEvent)
//modifies an event
	 .put('/events/:eventId', eventController.modifyEvent)
//deletes an event
	.delete('/events/:eventId', eventController.deleteEvent)


export default app;
