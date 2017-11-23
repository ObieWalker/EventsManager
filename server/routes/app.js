import express from 'express';
import eventController from '../controllers/eventController';
import centerController from '../controllers/centerController';


const app = express.Router();

//returns all events by date
//I intend to use later for searching through filter
app.get('/events', https://medium.com/@obiwalker/my-experience-in-boot-camp-so-far-db1532973187
//creates an event
	 .post('/events', eventController.createEvent)
//modifies an event
	 .put('/events/:eventId', eventController.modifyEvent)
//deletes an event
	.delete('/events/:eventId', eventController.deleteEvent)
//this returns all the centers


app.get('/centers', centerController.getCenters)
//this will return center details
	.get('centers/details', centerController.getCentersDetails)
	//creates a center
	.post('centers', centerController.createCenter)
	//modifies a center
	.put('centers', centerController.modifyCenter)


export default app;
