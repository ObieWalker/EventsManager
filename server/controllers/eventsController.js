import { Event } from '../models';
import { paginateEvents } from '../helpers/helper';

const Events = Event;
// const Centers = Center;

export default class EventsController {
  static createEvent(req, res) {
    // return Centers.findAll();
    return Events.findAll()
      .then((events) => {
        if (events) {
          events.forEach((event) => { // checks to see if there are any events with matching dates and centers
            if (event.date === req.body.date && event.center === req.body.center) {
              res.status(409).json({ message: 'The event center is booked on that day, please pick another' });
            }
          });
        }
        return Events.create({
          userId: req.decoded.id,
          centerId: req.body.center,
          eventType: req.body.eventType,
          date: req.body.date,
          guestNo: req.body.guestNo,
          email: req.body.email
        }).then(() => {
          res.status(201).json({ message: 'Your event has been booked' });
        })
          .catch((error) => {
            res.status(400).json({ message: 'Your request could not be processed', error });
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
          error: err.name
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
    const limit = 6;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    return Events.findAndCountAll({
      order: [['date', 'DESC']],
      limit,
      offset
    }).then(events => paginateEvents({
      req, res, events, limit, pageNo
    }))
      .catch((error) => {
        res.status(500).json({ message: 'Your request had an error', error });
      });
  }

  static getUserEvents(req, res) {
    const limit = 6;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    return Events.findAndCountAll({
      where: {
        userId: req.decoded.userId
      },
      order: [['date', 'DESC']],
      limit,
      offset
    }).then(events => paginateEvents({
      req, res, events, limit, pageNo
    }))
      .catch((error) => {
        res.status(500).json({ message: 'Your request had an error', error });
      });
  }

  static getCenterEvents(req, res) {
    const limit = 6;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    const { id } = req.params;
    try { // avoid user having a string input as id
      parseInt(id, 10);
    } catch (e) {
      return res.status(400).json({ success: false, message: 'There was an error with the center ID input!' });
    } finally {
      Events.findAndCountAll({
        where: {
          centerId: id
        },
        order: [['date', 'DESC']],
        limit,
        offset
      }).then(events => paginateEvents({
        req, res, events, limit, pageNo
      }))
        .catch((error) => {
          res.status(500).json({ message: 'Your request had an error', error });
        });
    }
  }
}
