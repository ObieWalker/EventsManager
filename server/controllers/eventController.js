import validator from 'validatorjs';
import Sequelize from 'sequelize';
import models from '../models';

const {Events} = models;
const {Users} = models;

const {sequelize} = models;


const createRules = {
	type: 'required',
	location: 'required',
	guestno: 'required',
	eventdate: 'required',
	facility: 'required'
}

const modifyRules = {
	type: 'required',
	location: 'required',
	guestno: 'required',
	eventdate: 'required',
	facility: 'required'
}

const EventController = {
	//returns all the events by date
	listEventsByDate( req, res, next){
		if(req.query.order && req.query.sort){
			return sequelize.query(`
			SELECT * FROM "Events" AS "Events" ORDER BY "date" ASC;`, {type: Sequelize.QueryTypes.SELECT})
				.then(events => res.status(200).json({ message: 'All Events are displayed from the most recent', List: events}))
				.catch(err=> res.status(400).json(err));
		}
		next();
	},

	createEvent(req, res){
		const eventValidator = new validator(req.body, createRules);
		if (eventValidator.passes()){
			return Event.findOne({where: { eventdate: req.body.eventdate}})
				.then((event) => {
					if (event) {
						return res.status(400).json({ message:' This day is already booked'});
					}
				}).then(() => Event.create({
					type: req.body.type,
					location: req.body.location,
					guestno: req.body.guestno,
					eventdate: req.body.eventdate,
					facility: req.body.facility
				}))
				.then((event) => {
					res.status(200).json({ message: 'Your Event has been booked'});
				});
		}
		const erros = Object.values(eventValidator.errors.errors).map(val => val[0]);
		res.status(403).json({ message: errors});
	},

	//this will modify the events details
	modifyEvent(req, res){
		//checks to see if entries are valid
		const validateInput = new Validator (req.body, modifyRules);
		if (validateInput.passes()){
			return Events.findOne({
				where: {
					id: req.params.eventId,
				},
			})
			.then((event) => {
				if (!event){
					res.status(404).json({ message: 'Event does not exist '});
				} else if (event.userId === req.decoded.id){
					event.update({
					type: req.body.type,
					location: req.body.location,
					guestno: req.body.guestno,
					eventdate: req.body.eventdate,
					facility: req.body.facility
					})
					.then(() => {
						event.reload().then(event => res.status(200).json({
							message: 'Event has been updated',
							updated: event,
						}));
					})
					.catch((err) =>{
						res.status(500).json({ message: 'Unable to update your event', error : err});
					});
				}else {//implented with jwt
					res.status(403).json({ message: 'You are not authorized to modify the event'});
				}
			})
			.catch((err) => {
				res.status(400).json({
					message: 'Your request cannot be processed',
					err: err.name
				});
			});
		}
		const errors = Object.values(validateInput.error.error).map(val => val[0]);
		res.status(403).json({message: errors});
	},

	//deleting an event
	deleteEvent(req, res){
		const thisEventId = req.params.eventId;

		if (thisEventId < 1){
			return res.status(404).json({message: 'This event does not exist'});
		}
		return Events.finById(thisEventId).then((event) => {
			if(!event){
				res.status(400).json({message: 'This event does not exist'});
			}
			if (event.userId === req.decoded.id){
			event.destroy();
			res.status(200).json({message: 'Your event has been deleted'})
			} else {
				res.status(403).json({ message: 'You are not allowed to delete this event'});
			}
		})
		.catch(Error => res.status(500).json({message : 'Server Error', Error}));
	},

	getUserEvents(req, res){
		return Events.findAll({
			where: {
				userId: req.decoded.id,
			},
			order: [['createdAt', 'DESC']]
		}).then((events) => {
			if(events.length > 0) {
				Users.findById(req.decoded.id).then((user) =>{
					if(!user){
						res.status(404).json({message: 'This user is not found'});
					}
					const Username = user.get('username');
					res.status(200).json({Username, Events:events});
				}).catch (error => res.status(500).json({error}));
			}else{
				res.status(400).json({message: 'This user has no events'});
			}
		}).catch(error => res.status(500).json({error}));
	},

};

export default EventController;