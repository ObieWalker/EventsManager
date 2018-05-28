'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @returns {object} message
 *
 * @export
 * @class validate
 */
var validate = function () {
  function validate() {
    _classCallCheck(this, validate);
  }

  _createClass(validate, null, [{
    key: 'signUpValidator',

    /**
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @param {any} next
     * @returns {object} message
     * @memberof validate
     */
    value: function signUpValidator(req, res, next) {
      req.checkBody('email', 'You did not enter a valid email').isEmail();
      req.checkBody('email', 'You did not enter a valid email').notEmpty();
      req.sanitizeBody('email').normalizeEmail({
        gmail_remove_subaddress: false, gmail_remove_dots: true
      });
      req.checkBody('firstName', 'Please enter your first name').notEmpty();
      req.checkBody('lastName', 'Please enter your last name').notEmpty();
      req.checkBody('password', 'You have to input a password please').notEmpty();
      req.checkBody('password', 'Your password must be more than 5 characters').isLength({
        min: 5, max: undefined
      });
      req.checkBody('verifyPassword', 'You have to verify your password').notEmpty();
      req.checkBody('username', 'You have to enter a username').notEmpty();

      var errors = req.validationErrors();
      if (errors) {
        res.status(400).json({
          success: false, message: errors[0].msg, error: errors
        });
        return;
      }next(); // next function
    }
    /**
    *
    *
    * @static
    * @param {any} req
    * @param {any} res
    * @param {any} next
    * @returns {object} message
    * @memberof validate
    */

  }, {
    key: 'signInValidator',
    value: function signInValidator(req, res, next) {
      req.checkBody('email', 'Please enter a valid email!').isEmail();
      req.sanitizeBody('email').normalizeEmail({
        gmail_remove_subaddress: false, gmail_remove_dots: true
      });
      req.checkBody('password', 'You must enter a passwword').notEmpty();
      req.checkBody('password', 'Your password must be more than 5 characters').isLength({
        min: 5, max: undefined
      });

      var errors = req.validationErrors();
      if (errors) {
        res.status(400).json({
          success: false, message: errors[0].msg, error: errors
        });
        return;
      }
      next();
    }
    /**
    *
    *
    * @static
    * @param {any} req
    * @param {any} res
    * @param {any} next
    * @returns {object} message
    * @memberof validate
    */

  }, {
    key: 'centerValidation',
    value: function centerValidation(req, res, next) {
      req.checkBody('name', 'Your center must have a name').notEmpty();
      req.checkBody('city', 'You must enter a city').notEmpty();
      req.checkBody('capacity', 'You have to enter the venue capacity').notEmpty();
      req.checkBody('address', 'You have to input an address').notEmpty();
      req.checkBody('capacity', 'The capacity must be an integer value above 10').isInt({
        gt: 10, lt: 4000000
      });

      var errors = req.validationErrors();
      if (errors) {
        res.status(400).json({
          success: false, message: errors[0].msg, error: errors
        });
        return;
      }
      next();
    }
    /**
    *
    *
    * @static
    * @param {any} req
    * @param {any} res
    * @param {any} next
    * @returns {object} message
    * @memberof validate
    */

  }, {
    key: 'eventValidation',
    value: function eventValidation(req, res, next) {
      req.checkBody('centerId', 'You have to enter a center').notEmpty();
      req.checkBody('eventType', 'The event type cannot be empty').notEmpty();
      req.checkBody('guestNo', 'Your guest estimate must be a number more than 2').isInt({ gt: 2 });
      // req.checkBody('date').isDate();
      req.checkBody('date', 'Your date entry cannot be empty').notEmpty();
      req.checkBody('date', 'Your date cannot be in the past').isAfter();

      var errors = req.validationErrors();
      if ((0, _moment2.default)(req.body.date).isValid() === false) {
        errors[0].msg = 'Invalid date';
      }
      if (errors) {
        res.status(400).json({
          success: false, message: errors[0].msg, error: errors
        });
        return;
      }
      next();
    }
  }]);

  return validate;
}();

exports.default = validate;