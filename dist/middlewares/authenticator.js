'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();
/**
 * @description authenticator
 *
 * @export
 * @class auth
 */

var auth = function () {
  function auth() {
    _classCallCheck(this, auth);
  }

  _createClass(auth, null, [{
    key: 'authenticate',

    /**
     * @returns {object} message
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @param {any} next
     * @memberof auth
     */
    value: function authenticate(req, res, next) {
      var token = req.body.token || req.query.token || req.headers.token;
      if (token) {
        _jsonwebtoken2.default.verify(token, process.env.SECRET, function (err, decoded) {
          if (err) {
            return res.status(401).json({
              message: 'Failed to authenticate user'
            });
          }
          _models.User.findOne({
            where: {
              id: decoded.id
            }
          }).then(function (user) {
            if (!user) {
              return res.status(401).json({
                message: 'User account does not exist'
              });
            }
            // the user data is stored
            req.decoded = decoded;
            next();
          });
        });
      } else {
        res.status(403).json({
          message: 'No token, please sign up or sign in'
        });
      }
    }
  }]);

  return auth;
}();

exports.default = auth;