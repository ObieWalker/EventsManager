'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _helper = require('../helpers/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Centers = _models.Center;
var Users = _models.User;
var Op = _models2.default.sequelize.Op;
/**
 * @description center controller
 *
 * @export
 * @class CentersController
 */

var CentersController = function () {
  function CentersController() {
    _classCallCheck(this, CentersController);
  }

  _createClass(CentersController, null, [{
    key: 'createCenter',

    // create a center only if user is admin
    /**
     * @returns {object} center
     *
     * @static
     *
     * @description creates center in database
     *
     * @param {any} req
     *
     * @param {any} res
     *
     * @memberof CentersController
     */
    value: function createCenter(req, res) {
      Users.findById(req.decoded.id).then(function (user) {
        if (user.isAdmin !== true) {
          return res.status(403).json({
            success: false,
            message: 'You do not have the admin privileges to do this'
          });
        }
        _models.Center.findOne({
          where: {
            name: req.body.name,
            address: req.body.address
          }
        }).then(function (matchCenter) {
          if (matchCenter) {
            return res.status(409).json({
              message: 'Center already exists'
            });
          }
          Centers.create({
            userId: req.decoded.id,
            name: req.body.name,
            address: req.body.address,
            facility: req.body.facility,
            capacity: req.body.capacity,
            city: req.body.city,
            image: req.body.image
          }).then(function (center) {
            res.status(201).json({
              success: true,
              message: 'The center has been added',
              center: center
            });
          }).catch(function (error) {
            res.status(400).json({
              success: false,
              message: 'Your request could not be processed',
              error: error.messsage
            });
          });
        }).catch(function (error) {
          res.status(403).json({
            success: false,
            message: 'You do not have the admin rights to add a center',
            error: error
          });
        });
      });
    }
    /**
     * @returns {object} center
     *
     * @static
     *
     * @description Modifies a center in the database
     *
     * @param {any} req
     *
     * @param {any} res
     *
     * @memberof CentersController
     */

  }, {
    key: 'modifyCenter',
    value: function modifyCenter(req, res) {
      Users.findById(req.decoded.id).then(function (user) {
        if (user.isAdmin !== true) {
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
            message: 'There was an error with the center ID input!'
          });
        }
        Centers.findById(intId).then(function (center) {
          if (!center) {
            // not found
            return res.status(404).json({
              success: true,
              message: 'No center found'
            });
          }
          return center.update({
            userId: req.decoded.id,
            name: req.body.name,
            address: req.body.address,
            facility: req.body.facility,
            capacity: req.body.capacity,
            city: req.body.city,
            image: req.body.image
          }).then(function () {
            center.reload().then(function () {
              return res.status(200).json({
                success: true,
                message: 'The center has been modified',
                updated: center
              });
            });
          }).catch(function (err) {
            res.status(500).json({
              success: false,
              message: 'Could not update',
              error: err
            });
          });
        });
      });
    }
    /**
     * @returns {object} centers
     *
     * @static
     *
     * @description Gets all centers from a database
     *
     * @param {any} req
     *
     * @param {any} res
     *
     * @memberof CentersController
     */

  }, {
    key: 'getAllCenters',
    value: function getAllCenters(req, res) {
      var limit = parseInt(req.query.limit, 10) || 6;
      var offset = 0;
      var pageNo = parseInt(req.query.pageNo, 10) || 1;
      offset = limit * (pageNo - 1);
      var filter = req.query.filter || '';
      var facility = req.query.facility || '';
      var capacity = parseInt(req.query.capacity, 10) || 1;
      return Centers.findAndCountAll({
        where: _defineProperty({
          capacity: _defineProperty({}, Op.gte, capacity),
          facility: _defineProperty({}, Op.iRegexp, '^.*' + facility + '.*$')
        }, Op.or, {
          name: _defineProperty({}, Op.iRegexp, '^.*' + filter + '.*$'),
          city: _defineProperty({}, Op.iRegexp, '^.*' + filter + '.*$')
        }),
        order: [['name', 'DESC']],
        limit: limit,
        offset: offset
      }).then(function (centers) {
        return (0, _helper.paginateData)({
          req: req,
          res: res,
          centers: centers,
          limit: limit,
          pageNo: pageNo
        });
      }).catch(function (error) {
        res.status(500).json({
          message: 'Your request had an error',
          error: error
        });
      });
    }
    /**
     *
     * @description Gets a center from database
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {object} center
     * @memberof CentersController
     */

  }, {
    key: 'getCenterDetails',
    value: function getCenterDetails(req, res) {
      var id = req.params.id;

      var intId = parseInt(id, 10);
      if ((0, _helper.paramValidator)(id) === true) {
        return res.status(400).json({
          success: false,
          message: 'There was an error with the center ID input!'
        });
      }
      Centers.findOne({
        where: {
          id: intId
        }
      }).then(function (center) {
        if (!center) {
          return res.status(404).json({
            success: false,
            message: 'We do not have records of this center'
          });
        }
        res.status(200).json({
          success: true,
          message: 'Here is your center',
          center: center
        });
      }).catch(function (error) {
        return res.status(400).json({ success: false, error: error });
      });
    }
    /**
     * @returns {object} delete message
     *
     * @description Deletes center from database
     *
     * @static
     *
     * @param {any} req
     *
     * @param {any} res
     *
     * @memberof CentersController
     */

  }, {
    key: 'deleteCenter',
    value: function deleteCenter(req, res) {
      Users.findById(req.decoded.id).then(function (user) {
        if (user.isAdmin !== true) {
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
            message: 'There was an error with the center ID input!'
          });
        }
        Centers.findById(intId).then(function (center) {
          if (!center) {
            // if no centers
            return res.status(400).send({
              success: false,
              message: 'No such center'
            });
          } // else remove
          return center.destroy().then(res.status(200).send({
            success: true,
            message: 'The center has been deleted!'
          })).catch(function (error) {
            return res.status(400).send(error);
          });
        });
      });
    }
  }]);

  return CentersController;
}();

exports.default = CentersController;