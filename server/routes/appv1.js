import express from 'express';
import Events from '../controllers/controllerCE';
import Centers from '../controllers/controllerCE';


const app = express.Router();

//create a new event
app.post('/events', (req, res, next) => {
	new Events(req, res, next).createEvent(req.body);
	console.log("Event created")
});
//return all events
app.get('/events', (req, res, next) => {
	new Events(req, res, next).getAllEvents();
});
//modify an event
app.put('/events/:id', (req, res, next) => {
	new Events(req, res, next).modifyEvent(req.params.id, req.body);
	console.log("The event has been modified");
});
//delete an event
app.delete('/events/:id', (req, res, next) => {
	new Events(req, res, next).deleteEvent(req.params.id);
	console.log("The event has been deleted");
});



//add new center
app.post('/centers', (req, res, next) => {
	new Centers(req, res, next).addCenter(req.body);
	console.log("Center Added");
})
//edit a center's details
app.put('/centers/:id', (req, res, next) => {
	new Centers(req, res, next).modifyCenter(req.params.id, req.body);
	console.log("The center details have been modified");
});
//get all centers
app.get('/centers', (req, res, next) => {
	new Centers(req, res, next).getAllCenters();
});
//get center details
app.get('/centers/:id', (req, res, next) => {
	new Centers(req, res, next).getDetails(req.params.id, req.body);
	console.log("Here are the center details.")
});
//delete a center
app.delete('/centers/:id', (req, res, next) => {
	new Centers(req, res, next).deleteCenter(req.params.id);
	console.log("The center has been deleted");
});

export default app;







