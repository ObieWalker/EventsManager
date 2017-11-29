import validator from 'validatorjs';
import Sequelize from 'sequelize';
import models from '../models';

const {Events} = models;
const {Users} = models;

const {sequelize} = models;
//create rules 
const createConditions = {
	eventtype: 'required|string',
	eventdate: 'required|dateonly',
	guestno: 'required|integer'
};

const editRules = {
	eventtype: 'required',
	eventdate: 'required',
	guestno: 'required'
};

//const EventsController = {
	//create event
export default class EventsController {
	static createEvent(req, res) {
		const eventValidator = new validator(req.body, createConditions);
		//if this new instance matches the set conditions
		//console.log("debug test 1")
		if(eventValidator.passes()){
			return Events.findOne({
				where: {center: req.body.centerId} && {date:req.body.eventdate}
			}).then((event) => {
				if(event) {
					return res.status(400).json({ message: 'An event at this center is booked for this day' });
				}
			}).then(() => Events.create({
				userId: req.decoded.userId,
				centerId: req.decoded.centerId,
				eventtype: req.body.eventtype,
				eventdate: req.body.eventdate,
				guestno: req.body.guestno
			})).then((event) =>{
				 res.status(200).json({ message: 'Your event has been booked'});
			}).catch((err) => {
				res.status(400).json({message: 'Your request could not be processed'});
			});
		}
		const errors = Object.values(eventValidator.errors.errors).map(val => val[0]);
		res.status(403).json({ message: errors });
	}

	static editEvent (req, res) {
		const valivalidate =  new validator(req.body, editRules);
		//if it is validated
		if (valivalidate.passes()) {
			return Events.findOne({
				where : {
					id: req.params.id,
				},
			}).then((event) =>{
				if(!event) {
					res.status(404).json({ message: 'Event does not exist within our records'});
				}else if (events.userId === req.decoded.id){
					event.update({
						eventype: req.body.eventype,
						eventdate: req.body.eventdate,
						guestno: req.body.guestno
					})
					.then(()=> {
						event.reload().then(event => res.status(200).json({
							message: 'Your event has been updated',
							updated: event,
						}));
					})
					.catch((err) => {
						res.status(500).json({ message: 'Could not update', error: err });
					});
				} else {
					res.status(403).json({ message: 'This user is not allowed to update' });
				}
			})
			.catch((err) => {
				res.status(400).json({
				message: 'Cannot do that right now',
				Error: err.name
				});
			});
		}
		const errors = Object.values(valivalidate.errors.errors).map(val => val[0]);
		res.status(403).json({ message: errors });
	}
	
	static deleteEvent(req, res) {
		const eventHere = req.params.eventId;
		
			if (eventHere < 1) {
			  return res.status(404).json({ message: 'Cannot find this event' });
			} 
			return Events.findById(eventHere).then((event) => {
			  if (!event) {
				res.status(404).json({ message: 'Sorry but we doubt you actually booked this event' });
			  }
			  if (event.userId === req.decoded.id) {
				event.destroy();
				res.status(200).json({ message: 'Your event has been deleted. Its gone' });
			  } else {
				res.status(403).json({ message: 'You just are not allowed to delete this event' });
			  }
			})
			.catch(Error => res.status(500).json({ message: 'Server Error', Error }));
		
	}
	//outputs all a users events
	static allUsersEvents (req, res) {
		console.log("get all 1")
		return Events.findAll({
			where: {
			  userId: req.decoded.id,
			},
			order: [['eventdate', 'DESC']]
	  
		  }).then((events) => {
			if (events.length > 0) {
			  Users.findById(req.decoded.id).then((user) => {
				if (!user) {
				  res.status(404).json({ message: 'This user does not exist' });
				}
				const Username = user.get('username');
				res.status(200).json({ Username, Events: events });
			  }).catch(error => res.status(500).json({ error }));
			} else {
			  res.status(400).json({ message: 'This event was not created' });
			}
		  }).catch(error => res.status(500).json({ error }));
	}

	static allEvents (req, res) {
		return Events.findAll({
			order: [['eventdate', 'DESC']]
		  }).then((events) => {
			if (events.length > 0) {
			  if (req.query) { 
				  return res.status(200).json({ message: 'All the upcoming events:', List: events}); }
			}
			res.status(404).json({ message: 'There are no events' });
		  });
	}
}