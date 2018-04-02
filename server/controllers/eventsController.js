import { Event } from '../models';

const Events = Event;
// const Centers = Center;

export default class EventsController {
  static createEvent(req, res) {
    // return Centers.findAll();
    return Events.findAll()
      .then((events) => {
        events.forEach((event) => { // checks to see if there are any events with matching dates and centers
          if (event.date === req.body.date && event.center === req.body.center) {
            res.status(409).json({ message: 'The event center is booked on that day, please pick another' });
          }
        });
        return Events.create({
          userId: req.decoded.userId,
          center: req.body.center,
          eventType: req.body.eventType,
          date: req.body.date,
          guestNo: req.body.guestNo,
          email: req.body.email
        }).then(() => {
          res.status(201).json({ message: 'Your event has been booked' });
        }).catch(() => {
          res.status(400).json({ message: 'Your request could not be processed' });
        });
      });
  }

  static editEvent(req, res) {
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) {
          res.status(404).json({ message: 'Event does not exist within our records' });
        }
        return event.update({
          center: req.body.center,
          userId: req.decoded.userId,
          eventType: req.body.eventType,
          date: req.body.date,
          guestNo: req.body.guestNo,
          email: req.body.email
        })
          .then(() => {
            event.reload().then(() => res.status(200).json({
              message: 'Your event has been updated',
              updated: event
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
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) { // if no centers
          return res.status(400).send({ message: 'No such event' });
        } // else remove
        return event.destroy()
          .then(res.status(200).send({ message: 'The event has been cancelled' }))
          .catch(error => res.status(400).send(error));
      });
  }

  static allEvents(req, res) {
    if (Events.length > 0) {
      return Events.findAll({
        order: [['date', 'DESC']]
      }).then((events) => {
        if (events.length > 0) {
          if (req.query) {
            return res.status(200).json({ message: 'All Events:', List: events });
          }
        }
        res.status(404).json({ message: 'There are no events' });
      });
    }
    res.status(404).json({ message: 'There are no events' });
  }

  static getUserEvents(req, res) {
    return Events
      .findAll({
        where: {
          userId: req.decoded.userId
        }
      }).then((events) => {
        if (events.length > 0) {
          if (req.query) {
            return res.status(200).json({ message: 'All of your upcoming events:', List: events });
          }
        }
        res.status(404).json({ message: 'You have no events.' });
      }).catch(error => res.status(404).json({ message: 'You have no events', error }));
  }
}
