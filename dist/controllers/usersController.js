'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _models = require('../models');

var _helper = require('../helpers/helper');

var _contactUs = require('../helpers/contactUs');

var _contactUs2 = _interopRequireDefault(_contactUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();
var Users = _models.User;
var saltRound = 13;
/**
 * @description user controller
 *
 * @export
 * @class UsersController
 */

var UsersController = function () {
  function UsersController() {
    _classCallCheck(this, UsersController);
  }

  _createClass(UsersController, null, [{
    key: 'signup',

    /**
     * @description registers a user
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @returns {object} user
     * @memberof UsersController
     */
    value: function signup(req, res) {
      return Users.findOne({
        where: {
          email: req.body.email.toLowerCase()
        }
      }).then(function (users) {
        // checks to see if user already exist
        if (users) {
          return res.status(409).json({
            message: 'User already exists'
          });
        } // ensures both entries to password match
        if (req.body.password !== req.body.verifyPassword) {
          // passwords must match
          return res.status(400).json({ message: 'password did not match' });
        } // password encrypt at 2 raised to power 13
        var myPassword = _bcrypt2.default.hashSync(req.body.password, saltRound);
        // creates account
        return Users.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: myPassword,
          verifyPassword: myPassword,
          loginTime: Date.now(),
          email: req.body.email.toLowerCase()
        }).then(function (user) {
          return res.status(201).json({
            message: 'Your account has been created!, Your details',
            user: {
              Firstname: user.firstName,
              Lastname: user.lastName,
              Email: user.email
            }
          });
        }).catch(function (error) {
          return res.status(500).json({ message: 'Server Error', error: error });
        });
      });
    }
    /**
     * @description signs in a user
     * @return {object} sign in message
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof UsersController
     */

  }, {
    key: 'signin',
    value: function signin(req, res) {
      Users.findOne({
        where: { email: req.body.email.toLowerCase() }
      }).then(function (user) {
        if (!user) {
          res.status(404).send({
            success: false,
            message: 'Wrong email or password'
          });
        } else {
          _bcrypt2.default.compare(req.body.password, user.password, function (err, hash) {
            if (!hash) {
              res.status(403).json({ success: false, message: 'Wrong email or password' });
            } else if (hash) {
              var payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                id: user.id,
                isAdmin: user.isAdmin,
                loginTime: Date.now(),
                createdAt: user.createdAt
              };
              var token = _jsonwebtoken2.default.sign(payload, process.env.SECRET, {
                expiresIn: '24h'
              });
              res.status(200).json({ success: true, message: 'Login Successful!', token: token });
            }
          });
        }
      }).catch(function (error) {
        res.status(400).send({
          success: false,
          error: error
        });
      });
    }
    /**
     * @description returns all users from database
     * @returns {object} users
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof UsersController
     */

  }, {
    key: 'getAllUsers',
    value: function getAllUsers(req, res) {
      var limit = 10;
      var offset = 0;
      var pageNo = parseInt(req.query.pageNo, 10) || 1;
      offset = limit * (pageNo - 1);
      Users.findById(req.decoded.id).then(function (user) {
        if (user.isAdmin !== true) {
          return res.status(403).json({
            success: false,
            message: 'You do not have the admin privileges to do this'
          });
        }
        return Users.findAndCountAll({
          order: [['id', 'DESC']],
          limit: limit,
          offset: offset
        }).then(function (users) {
          return (0, _helper.paginateUsers)({
            req: req,
            res: res,
            users: users,
            limit: limit,
            pageNo: pageNo
          });
        }).catch(function (error) {
          res.status(500).json({ message: 'Your request had an error', error: error });
        });
      });
    }
    /**
     * @description sets a user as an admin
     * @returns {object} user
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof UsersController
     */

  }, {
    key: 'setAsAdmin',
    value: function setAsAdmin(req, res) {
      Users.findById(req.decoded.id).then(function (adminUser) {
        if (adminUser.isAdmin !== true) {
          return res.status(403).json({
            success: false,
            message: 'You do not have the admin privileges to do this'
          });
        }
        var id = req.params.id;

        if ((0, _helper.paramValidator)(id) === true) {
          return res.status(400).json({
            success: false,
            message: 'There was an error with the user ID input!'
          });
        }
        Users.findById(id).then(function (user) {
          if (!user) {
            // not found
            return res.status(404).json({ success: true, message: 'No user found' });
          }
          return user.update({
            isAdmin: !user.isAdmin
          }).then(function () {
            user.reload().then(function () {
              return res.status(200).json({
                success: true,
                message: "The user's details have been modified",
                user: user
              });
            });
          }).catch(function (err) {
            res.status(500).json({
              success: false,
              message: 'Could not update user status',
              error: err
            });
          });
        });
      });
    }
    /**
     * @description deletes a user from database
     * @returns {object} delete message
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof UsersController
     */

  }, {
    key: 'deleteUser',
    value: function deleteUser(req, res) {
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
            message: 'There was an error with the user ID input!'
          });
        }
        Users.findById(intId).then(function (user) {
          if (!user) {
            // not found
            return res.status(404).json({ success: true, message: 'No user found' });
          }
          return user.destroy().then(function () {
            return res.status(200).json({
              success: true,
              message: "This user's account has been deleted",
              updated: user
            });
          }).catch(function (err) {
            res.status(500).json({
              success: false,
              message: 'Unable to delete user',
              error: err
            });
          });
        });
      });
    }
    /**
     * @returns {object} email sent
     *
     * @static
     * @param {any} req
     * @param {any} res
     * @memberof UsersController
     */

  }, {
    key: 'contactAdmin',
    value: function contactAdmin(req, res) {
      var _req$body = req.body,
          firstName = _req$body.firstName,
          lastName = _req$body.lastName,
          username = _req$body.username,
          email = _req$body.email,
          message = _req$body.message;

      if ((0, _contactUs2.default)(firstName, lastName, username, email, message) === false) {
        return res.status(500).json({
          success: false,
          message: 'Could not send mail.'
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent.'
      });
    }
  }]);

  return UsersController;
}();

exports.default = UsersController;