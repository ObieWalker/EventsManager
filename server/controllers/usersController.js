import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../models';
import { paginateUsers } from '../helpers/helper';


dotenv.config();
const Users = User;
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
    return Users.findOne({
      where: {
        email: req.body.email.toLowerCase()
      }
    })
      .then((users) => {
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
        return Users.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: myPassword,
          verifyPassword: myPassword,
          email: req.body.email.toLowerCase()
        })
          .then(user => res.status(201).json({
            message: 'Your account has been created!, Your details',
            user: {
              Firstname: user.firstName,
              Lastname: user.lastName,
              Email: user.email
            }
          }))
          .catch(error => res.status(500).json({ message: 'Server Error', error }));
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
    Users.findOne({
      where: { email: req.body.email.toLowerCase() }
    })
      .then((user) => {
        if (!user) {
          res.status(404).send({
            success: false,
            message: 'Wrong email or password'
          });
        } else {
          bcrypt.compare(req.body.password, user.password, (err, hash) => {
            if (!hash) {
              res.status(403).json({ success: false, message: 'Wrong email or password' });
            } else if (hash) {
              const payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                id: user.id,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
              };
              const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' });
              res.status(200).json({ success: true, message: 'Login Successful!', token });
            }
          });
        }
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
    Users.findById(req.decoded.id)
      .then((user) => {
        if (user.isAdmin !== true) {
          return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
        }
        return Users.findAndCountAll({
          order: [['id', 'DESC']],
          limit,
          offset
        }).then(users => paginateUsers({
          req, res, users, limit, pageNo
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
    Users.findById(req.decoded.id)
      .then((adminUser) => {
        if (adminUser.isAdmin !== true) {
          return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
        }
        const { id } = req.params;
        const intId = parseInt(id, 10);
        if (!Number.isInteger(intId) || !((id).indexOf('.') === -1) || Number.isNaN(intId) || Math.sign(id) === -1) {
          return res.status(400).json({ success: false, message: 'There was an error with the user ID input!' });
        }
        Users.findById(id)
          .then((user) => {
            if (!user) { // not found
              return res.status(404).json({ success: true, message: 'No user found' });
            }
            return user.update({
              isAdmin: req.body.isAdmin
            })
              .then(() => {
                user.reload()
                  .then(() => res.status(200).json({
                    success: true,
                    message: 'The user\'s details have been modified',
                    updated: user
                  }));
              })
              .catch((err) => {
                res.status(500).json({ success: false, message: 'Could not update user status', error: err });
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
    Users.findById(req.decoded.id)
      .then((adminUser) => {
        if (adminUser.isAdmin !== true) {
          return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
        }
        const { id } = req.params;
        const intId = parseInt(id, 10);
        if (!Number.isInteger(intId) || !((id).indexOf('.') === -1) || Number.isNaN(intId) || Math.sign(id) === -1) {
          return res.status(400).json({ success: false, message: 'There was an error with the user ID input!' });
        }
        Users.findById(id)
          .then((user) => {
            if (!user) { // not found
              return res.status(404).json({ success: true, message: 'No user found' });
            }
            return user.destroy()
              .then(() => res.status(200).json({
                success: true,
                message: 'The user\'s details have been deleted',
                updated: user
              }))
              .catch((err) => {
                res.status(500).json({ success: false, message: 'Unable to delete user', error: err });
              });
          });
      });
  }
}
