import dotenv from 'dotenv';
import models, { Event, Center, User } from '../models';
import { paginateEvents } from '../helpers/helper';
import sendMail from '../helpers/sendMail';

dotenv.config();
const Events = Event;
const Centers = Center;
const Users = User;
const { Op } = models.sequelize;

export default class EventsController {
  static createEvent(req, res) {
    // return Centers.findAll();
    return Events.findAll()
      .then((events) => {
        if (events) {
          events.forEach((matchEvent) => { // checks to see if there are any events with matching dates and centers
            if (matchEvent.date === req.body.date && matchEvent.centerId === req.body.centerId) {
              res.status(409).json({ message: 'The event center is booked on that day, please pick another' });
            }
          });
        }
        return Events.create({
          userId: req.decoded.id,
          centerId: req.body.centerId,
          eventType: req.body.eventType,
          date: req.body.date,
          guestNo: req.body.guestNo,
          email: req.body.email
        }).then((event) => {
          res.status(201).json({ message: 'Your event has been booked', event });
        })
          .catch((error) => {
            res.status(400).json({ message: 'Your request could not be processed', error });
          });
      });
  }

  static editEvent(req, res) {
    const { id } = req.params;
    const intId = parseInt(id, 10);
    if (!Number.isInteger(intId) || !((id).indexOf('.') === -1) || Number.isNaN(intId) || Math.sign(id) === -1) {
      return res.status(400).json({ success: false, message: 'There was an error with the event ID input!' });
    }
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) {
          res.status(404).json({ message: 'Event does not exist within our records' });
        }
        return event.update({
          centerId: req.body.centerId,
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
    const { id } = req.params;
    const intId = parseInt(id, 10);
    if (!Number.isInteger(intId) || !((id).indexOf('.') === -1) || Number.isNaN(intId) || Math.sign(id) === -1) {
      return res.status(400).json({ success: false, message: 'There was an error with the event ID input!' });
    }
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) { // if no centers
          return res.status(404).send({ success: false, message: 'Event not found' });
        } // else remove
        return event.destroy()
          .then(res.status(200).send({ success: true, message: 'The event has been cancelled' }))
          .catch(error => res.status(400).send(error));
      });
  }

  static cancelEvent(req, res) {
    Users.findById(req.decoded.id)
      .then((adminUser) => {
        if (adminUser.isAdmin !== true) {
          return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
        }
        const { id } = req.params;
        const intId = parseInt(id, 10);
        if (!Number.isInteger(intId) || !((id).indexOf('.') === -1) || Number.isNaN(intId) || Math.sign(id) === -1) {
          return res.status(400).json({ success: false, message: 'There was an error with the event ID input!' });
        }
        return Events.findById(req.params.id)
          .then((event) => {
            if (!event) { // if no centers
              return res.status(404).send({ success: false, message: 'Event not found' });
            } // else remove
            const eventDate = event.date;
            const eventCenter = event.center;
            event.update({
              isCancelled: true
            }).then(() => User.findOne({
              where: {
                id: event.userId,
              }
            }).then((user) => {
              const receiverEmail = user.email;
              const firstname = user.firstName;
              sendMail(receiverEmail, firstname, eventDate, eventCenter);
            })
              .then(() => res.status(200).json({
                success: true,
                message: 'The event has been cancelled',
                cancelled: event
              }))
              .catch((err) => {
                res.status(500).json({ success: false, message: 'Could not cancel event', error: err });
              }));
          })
          .catch((err) => {
            res.status(400).json({
              message: 'Cannot do that right now',
              error: err.name
            });
          });
      });
  }

  static allEvents(req, res) {
    const limit = parseInt(req.query.limit, 10) || 6;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    Events.findAndCountAll({
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
    const limit = parseInt(req.query.limit, 10) || 6;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    return Events.findAndCountAll({
      where: {
        userId: req.decoded.id,
        date: {
          [Op.gte]: new Date().toDateString()
        }
      },
      order: [['date', 'ASC']],
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
    const limit = parseInt(req.query.limit, 10) || 6;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    const { centerId } = req.params;
    const intId = parseInt(centerId, 10);
    if (!Number.isInteger(intId) || !((centerId).indexOf('.') === -1) || Number.isNaN(intId) || Math.sign(centerId) === -1) {
      return res.status(400).json({ success: false, message: 'There was an error with the center ID input!' });
    }
    Centers.findOne({
      where: {
        id: centerId
      }
    }).then((center) => {
      if (!center) {
        return res.status(404).json({ success: false, message: 'This center does not exist' });
      }
    });
    Events.findAndCountAll({
      where: {
        centerId
      },
      order: [['date', 'DESC']],
      limit,
      offset
    }).then((events) => {
      if (!events) {
        return res.status(404).json({ success: true, message: 'No events booked with this center' });
      }
      paginateEvents({
        req, res, events, limit, pageNo
      });
    })
      .catch((error) => {
        res.status(500).json({ message: 'Your request had an error', error });
      });
  }
}
