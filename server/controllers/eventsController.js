import models from '../models'

const Events = models.Events
const Centers = models.Centers

export default class EventsController {
  static createEvent (req, res) {
    return Events.findAll()
      .then((events) => {
        events.forEach(event => { // checks to see if there are any events with matching dates and centers
          if (event.eventdate == req.body.eventdate && event.centername == req.body.centername) {
            res.status(409).json({message: 'The event center is booked on that day, please pick another'})
          }
        })
        return Events.create({
          // centerId: req.decoded.centerId,
          eventtype: req.body.eventtype,
          eventdate: req.body.eventdate,
          guestno: req.body.guestno
        }).then(event => {
          res.status(201).json({message: 'Your event has been booked'})
        }).catch((err) => {
          res.status(400).json({message: 'Your request could not be processed'});
        })
      })
  }

  static editEvent (req, res) {
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) {
          res.status(404).json({message: 'Event does not exist within our records'})
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
    return Events.findById(req.params.id)
      .then((event) => {
        if (!event) { // if no centers
          return res.status(400).send({ message: 'No such event' })
        } // else remove
        return event.destroy()
          .then(res.status(200).send({ message: 'The event has been cancelled' }))
          .catch(error => res.status(400).send(error))
      })
  }

  static allEvents (req, res) {
    return Events.findAll({
      order: [['eventdate', 'DESC']]
    }).then((events) => {
      if (events.length > 0) {
        if (req.query) {
          return res.status(200).json({message: 'All the upcoming events:', List: events})
        }
      }
      res.status(404).json({ message: 'There are no events' })
    })
  }
}
