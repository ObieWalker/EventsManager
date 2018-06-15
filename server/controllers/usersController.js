import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../models';
import { paginateUsers, paramValidator } from '../helpers/helper';
import contactUs from '../helpers/contactUs';

dotenv.config();
const saltRound = 13;
/**
 * @description user controller
 *
 * @export
 * @class UsersController
 */
export default class UsersController {
  /**
   * @description registers a user
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {object} user
   * @memberof UsersController
   */
  static signup(req, res) {
    return User.findOne({
      where: {
        email: req.body.email.toLowerCase()
      }
    }).then((users) => {
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
      const myPassword = bcrypt.hashSync(req.body.password, saltRound);
      // creates account
      return User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: myPassword,
        verifyPassword: myPassword,
        loginTime: Date.now(),
        email: req.body.email.toLowerCase()
      })
        .then((user) => {
          const message = 'Your account has been created!, Your details';
          return res.status(201).json({
            message,
            user: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }
          });
        })
        .catch(error =>
          res.status(500).json({ message: 'Server Error', error }));
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
  static signin(req, res) {
    User.findOne({
      where: { email: req.body.email.toLowerCase() }
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'Wrong email or password'
          });
        }
        bcrypt.compare(req.body.password, user.password, (err, hash) => {
          if (!hash) {
            return res
              .status(403)
              .json({ success: false, message: 'Wrong email or password' });
          } else if (hash) {
            const payload = {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              username: user.username,
              id: user.id,
              isAdmin: user.isAdmin,
              loginTime: Date.now(),
              createdAt: user.createdAt
            };
            const token = jwt.sign(payload, process.env.SECRET, {
              expiresIn: '24h'
            });
            return res.status(200).json({
              success: true,
              message: 'Login Successful!',
              token,
              user
            });
          }
        });
      })
      .catch((error) => {
        res.status(400).send({
          success: false,
          error
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
  static getAllUsers(req, res) {
    const limit = 10;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    User.findById(req.decoded.id).then((user) => {
      if (user.isAdmin !== true) {
        return res.status(403).json({
          success: false,
          message: 'You do not have the admin privileges to do this'
        });
      }
      return User.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      })
        .then(users =>
          paginateUsers({
            req,
            res,
            users,
            limit,
            pageNo
          }))
        .catch((error) => {
          res.status(500).json({ message: 'Your request had an error', error });
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
  static setAsAdmin(req, res) {
    const { id } = req.params;
    if (paramValidator(id) === true) {
      return res.status(400).json({
        success: false,
        message: 'There was an error with the user ID input!'
      });
    }
    User.findById(id).then((user) => {
      if (!user) {
        // not found
        return res
          .status(404)
          .json({ success: true, message: 'No user found' });
      }
      return user
        .update({
          isAdmin: !user.isAdmin
        })
        .then(() => {
          user.reload().then(() =>
            res.status(200).json({
              success: true,
              message: "The user's details have been modified",
              user
            }));
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: 'Could not update user status',
            error: err
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
  static deleteUser(req, res) {
    const { id } = req.params;
    const intId = parseInt(id, 10);
    if (paramValidator(id) === true) {
      return res.status(400).json({
        success: false,
        message: 'There was an error with the user ID input!'
      });
    }
    User.findById(intId).then((user) => {
      if (!user) {
        // not found
        return res
          .status(404)
          .json({ success: true, message: 'No user found' });
      }
      return user
        .destroy()
        .then(() =>
          res.status(200).json({
            success: true,
            message: "This user's account has been deleted",
            updated: user
          }))
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: 'Unable to delete user',
            error: err
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
  static contactAdmin(req, res) {
    const {
      firstName, lastName, username, email, message
    } = req.body;
    if (contactUs(firstName, lastName, username, email, message) === false) {
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
}
