import models from '../models';

const Events = models.Events

export default class EventsController {
  static createEvent (req, res) {
    return Events.create({
      centerId: req.decoded.centername,
      userId: req.decoded.username,
      eventtype: req.body.eventtype,
      eventdate: req.body.eventdate,
      guestno: req.body.guestno
    }).then(event => {
      res.status(201).json({message: 'Your event has been booked'})
    }).catch((err) => {
      res.status(400).json({message: 'Your request could not be processed'});
    });
  }

  static editEvent (req, res) {
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) {
          res.status(404).json({message: 'Event does not exist within our records'});
        }
        return event.update({
          // centerId: req.decoded.centername,
          // userId: req.decoded.username,
          eventtype: req.body.eventtype,
          eventdate: req.body.eventdate,
          guestno: req.body.guestno
        })
          .then(() => {
            event.reload().then(event => res.status(200).json({
              message: 'Your event has been updated',
              updated: event
            }))
          })
          .catch((err) => {
            res.status(500).json({ message: 'Could not update', error: err })
          })
      })
      .catch((err) => {
        res.status(400).json({
          message: 'Cannot do that right now',
          Error: err.name
        })
      })
  }

  static deleteEvent (req, res) {
    Events.findById(req.params.id)
      .then((center) => {
        if (!center) { // if no centers
          return res.status(400).send({ message: 'No such center' })
        } // else remove
        return center.destroy()
          .then(res.status(200).send({ message: 'The center has been deleted!' }))
          .catch(error => res.status(400).send(error))
      })
  }

  static allEvents (req, res) {
    return Events.findAll({
      order: [['eventdate', 'DESC']]
    }).then((events) => {
      if (events.length > 0) {
        if (req.query) {
          return res.status(200).json({message: 'All the upcoming events:', List: events}); }
      }
      res.status(404).json({ message: 'There are no events' })
    })
  }
}
