'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _helper = require('../helpers/helper');

var _sendMail = require('../helpers/sendMail');

var _sendMail2 = _interopRequireDefault(_sendMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();
var Events = _models.Event;
var Centers = _models.Center;
var Users = _models.User;
var Op = _models2.default.sequelize.Op;

var centerAttributes = ['name', 'address', 'city', 'image'];
/**
 * @description event controller
 *
 * @export
 * @class EventsController
 */

var EventsController = function () {
  function EventsController() {
    _classCallCheck(this, EventsController);
  }

  _createClass(EventsController, null, [{
    key: 'createEvent',

    /**
     * @description creates a new event
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {object} event
     * @memberof EventsController
     */
    value: function createEvent(req, res) {
      return Events.findOne({
        where: {
          centerId: req.body.centerId,
          date: req.body.date
        }
      }).then(function (event) {
        if (event) {
          return res.status(409).json({
            message: 'The event center is booked on that day, ' + 'please choose a different day or center.'
          });
        }
        return Centers.findById(req.body.centerId).then(function (center) {
          if (center && center.capacity < parseInt(req.body.guestNo, 10)) {
            return res.status(400).json({
              message: 'The center is too small for your guest estimate, ' + 'please pick a bigger venue.'
            });
          }
          return Events.create({
            userId: req.decoded.id,
            centerId: req.body.centerId,
            eventType: req.body.eventType,
            date: req.body.date,
            guestNo: req.body.guestNo
          }).then(function (newEvent) {
            return res.status(201).json({
              messgae: 'Your event has been booked',
              newEvent: newEvent
            });
          }).catch(function (error) {
            return res.status(400).json({
              message: 'Your request could not be processed',
              error: error
            });
          });
        });
      });
    }

    /**
     * @description modifies an event
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {pbject} event
     * @memberof EventsController
     */

  }, {
    key: 'editEvent',
    value: function editEvent(req, res) {
      var id = req.params.id;

      var intId = parseInt(id, 10);
      if ((0, _helper.paramValidator)(id) === true) {
        return res.status(400).json({
          success: false,
          message: 'There was an error with the event ID input!'
        });
      }
      return Events.findById(intId).then(function (event) {
        if (!event) {
          return res.status(404).json({
            message: 'Event does not exist within our records'
          });
        }
        return Events.findOne({
          where: {
            id: _defineProperty({}, Op.ne, req.params.id),
            centerId: req.body.centerId,
            date: req.body.date
          }
        }).then(function (matchedEvent) {
          if (matchedEvent) {
            return res.status(409).json({
              message: 'The event center is booked on that day, \n              please pick another'
            });
          }
          return Centers.findById(req.body.centerId).then(function (center) {
            if (center.capacity < parseInt(req.body.guestNo, 10)) {
              return res.status(400).json({
                message: 'The center cannot hold your guest estimate, ' + 'please pick a bigger venue.'
              });
            }
            return event.update({
              centerId: req.body.centerId,
              userId: req.decoded.id,
              eventType: req.body.eventType,
              date: req.body.date,
              guestNo: req.body.guestNo
            }).then(function () {
              event.reload().then(function () {
                return res.status(200).json({
                  message: 'Your event has been updated',
                  updated: event
                });
              });
            }).catch(function (err) {
              return res.status(500).json({
                message: 'Could not update',
                error: err
              });
            });
          });
        });
      }).catch(function (err) {
        return res.status(400).json({
          message: 'Cannot do that right now',
          error: err.name
        });
      });
    }
    /**
     * @description deletes an event from database
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {object} delete message
     * @memberof EventsController
     */

  }, {
    key: 'deleteEvent',
    value: function deleteEvent(req, res) {
      var id = req.params.id;

      if ((0, _helper.paramValidator)(id) === true) {
        return res.status(400).json({
          success: false,
          message: 'There was an error with the event ID input!'
        });
      }
      return Events.findById(req.params.id).then(function (event) {
        if (!event) {
          // if no centers
          return res.status(404).send({
            success: false,
            message: 'Event not found'
          });
        }
        return event.destroy().then(function () {
          return res.status(200).send({
            success: true,
            message: 'This ' + event.eventType + ' has been cancelled'
          });
        }).catch(function (error) {
          return res.status(400).send(error);
        });
      });
    }
    /**
     * @description admin cancelling an event
     * @returns {object} cancel message
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof EventsController
     */

  }, {
    key: 'cancelEvent',
    value: function cancelEvent(req, res) {
      Users.findById(req.decoded.id).then(function (adminUser) {
        if (adminUser.isAdmin !== true) {
          return res.status(403).json({
            success: false,
            message: 'You do not have the admin privileges to do this'
          });
        }
        var id = req.params.id;

        var intId = parseInt(id, 10);
        if ((0, _helper.paramValidator)(id) === true) {
          return res.status(400).json({
            success: false,
            message: 'There was an error with the event ID input!'
          });
        }
        return Events.findOne({
          where: {
            id: intId
          },
          include: [{
            model: _models.Center,
            attributes: centerAttributes
          }]
        }).then(function (event) {
          if (!event) {
            // if no centers
            return res.status(404).send({
              success: false,
              message: 'Event not found'
            });
          } // else remove
          var eventDate = event.date;
          var eventCenter = event.Center.name;
          var eventAddress = event.Center.address;
          event.update({
            isCancelled: !event.isCancelled
          }).then(function () {
            return _models.User.findOne({
              where: {
                id: event.userId
              }
            }).then(function (user) {
              var receiverEmail = user.email;
              var firstname = user.firstName;
              (0, _sendMail2.default)(receiverEmail, firstname, eventDate, eventCenter, eventAddress);
            }).then(function () {
              return res.status(200).json({
                success: true,
                message: 'The event has been cancelled',
                cancelled: event
              });
            }).catch(function (err) {
              return res.status(500).json({
                success: false,
                message: 'Could not cancel event',
                error: err
              });
            });
          });
        }).catch(function (err) {
          return res.status(400).json({
            message: 'Cannot do that right now',
            error: err.name
          });
        });
      });
    }
    /**
     * @return {object} events
     * @description returns all events in database
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof EventsController
     */

  }, {
    key: 'allEvents',
    value: function allEvents(req, res) {
      var limit = parseInt(req.query.limit, 10) || 6;
      var offset = 0;
      var pageNo = parseInt(req.query.pageNo, 10) || 1;
      offset = limit * (pageNo - 1);
      Events.findAndCountAll({
        where: {
          date: _defineProperty({}, Op.gte, new Date().toDateString())
        },
        include: [{
          model: _models.Center,
          attributes: centerAttributes
        }],
        order: [['date', 'ASC']],
        limit: limit,
        offset: offset
      }).then(function (events) {
        return (0, _helper.paginateEvents)({
          req: req,
          res: res,
          events: events,
          limit: limit,
          pageNo: pageNo
        });
      }).catch(function (error) {
        return res.status(500).json({
          message: 'Your request had an error',
          error: error
        });
      });
    }
    /**
     * @returns {object} events
     * @description returns all the events of a user
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof EventsController
     */

  }, {
    key: 'getUserEvents',
    value: function getUserEvents(req, res) {
      var limit = parseInt(req.query.limit, 10) || 6;
      var offset = 0;
      var pageNo = parseInt(req.query.pageNo, 10) || 1;
      offset = limit * (pageNo - 1);
      return Events.findAndCountAll({
        where: {
          userId: req.decoded.id,
          date: _defineProperty({}, Op.gte, new Date().toDateString())
        },
        include: [{
          model: _models.Center,
          attributes: centerAttributes
        }],
        order: [['date', 'ASC']],
        limit: limit,
        offset: offset
      }).then(function (events) {
        return (0, _helper.paginateEvents)({
          req: req,
          res: res,
          events: events,
          limit: limit,
          pageNo: pageNo
        });
      }).catch(function (error) {
        return res.status(500).json({
          message: 'Your request had an error',
          error: error
        });
      });
    }
    /**
     *
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {object} events
     * @memberof EventsController
     */

  }, {
    key: 'getUserHistory',
    value: function getUserHistory(req, res) {
      var limit = parseInt(req.query.limit, 10) || 6;
      var offset = 0;
      var pageNo = parseInt(req.query.pageNo, 10) || 1;
      offset = limit * (pageNo - 1);
      return Events.findAndCountAll({
        where: {
          userId: req.decoded.id,
          date: _defineProperty({}, Op.lt, new Date().toDateString())
        },
        include: [{
          model: _models.Center,
          attributes: centerAttributes
        }],
        order: [['date', 'DESC']],
        limit: limit,
        offset: offset
      }).then(function (events) {
        return (0, _helper.paginateHistory)({
          req: req,
          res: res,
          events: events,
          limit: limit,
          pageNo: pageNo
        });
      }).catch(function (error) {
        return res.status(500).json({
          message: 'Your request had an error',
          error: error
        });
      });
    }

    /**
     * @description get all events booked to a center
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {object} events
     * @memberof EventsController
     */

  }, {
    key: 'getCenterEvents',
    value: function getCenterEvents(req, res) {
      var limit = parseInt(req.query.limit, 10) || 6;
      var offset = 0;
      var pageNo = parseInt(req.query.pageNo, 10) || 1;
      offset = limit * (pageNo - 1);
      var centerId = req.params.centerId;

      var intId = parseInt(centerId, 10);
      if ((0, _helper.paramValidator)(centerId) === true) {
        return res.status(400).json({
          success: false,
          message: 'There was an error with the center ID input!'
        });
      }
      return Centers.findOne({
        where: {
          id: intId
        }
      }).then(function (center) {
        if (!center) {
          return res.status(404).json({
            success: false,
            message: 'This center does not exist'
          });
        }
        return Events.findAndCountAll({
          where: {
            centerId: centerId,
            date: _defineProperty({}, Op.gte, new Date().toDateString())
          },
          include: [{
            model: _models.Center,
            attributes: centerAttributes
          }],
          order: [['date', 'DESC']],
          limit: limit,
          offset: offset
        }).then(function (events) {
          if (!events) {
            return res.status(404).json({
              success: true,
              message: 'No events booked with this center'
            });
          }
          return (0, _helper.paginateEvents)({
            req: req,
            res: res,
            events: events,
            limit: limit,
            pageNo: pageNo
          });
        }).catch(function (error) {
          return res.status(500).json({
            message: 'Your request had an error',
            error: error
          });
        });
      });
    }
  }]);

  return EventsController;
}();

exports.default = EventsController;