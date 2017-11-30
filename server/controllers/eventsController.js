import models from '../models';

const Events = models.Events;
const Users = models.Users;


export default class EventsController {

	static createEvent(req, res){
		  Events.create({
				centerId: req.decoded.centername,
				eventtype: req.body.eventtype,
				eventdate: req.body.eventdate,
				guestno: req.body.guestno
			}).then((event) =>{
				 res.status(200).json({ message: 'Your event has been booked'});
			}).catch((err) => {
				res.status(400).json({message: 'Your request could not be processed'});
			});
	}
	

	static editEvent (req, res) {
			return Events.findById(req.params.id)
			.then((event) =>{
				if(!event) {
					res.status(404).json({ message: 'Event does not exist within our records'});
				}
				return event.update({
				  	centerId: req.body.centername,
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
				})
				.catch((err) => {
				res.status(400).json({
				message: 'Cannot do that right now',
				Error: err.name
				});
			});
	}
	
	static deleteEvent(req, res) {
		Events.findById(req.params.id)
		.then((event) => {
			if (!event) {
			res.status(404).json({ message: 'Sorry but we doubt you actually booked this event' });
			}
			return event.destroy()
			.then(res.status(200).json({ message: 'Your event has been deleted. Its gone' })
			);
		})
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

}