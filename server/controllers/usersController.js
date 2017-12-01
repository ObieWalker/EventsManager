
import jwt from 'jsonwebtoken'
import express from 'express'
import bcrypt from 'bcrypt'
import models from '../models'

const Users = models.Users

const app = express()
app.set('secret_key', secret.secret)

// this will be used for the password encryption
// this is the cost factor set to 2 raised to 13 just because
const saltRound = 13

export default class UsersController {
  static signup (req, res) {
    return Users.findAll({
      where: {
        email: req.body.email
      },
    })
      .then((users) => {
        // checks to see if user already exist
        if (users.length > 0) {
          return res.status(400).json({
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
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          password: myPassword,
          email: req.body.email
        })
          .then(user => res.status(200).json({
            message: 'Your account has been created!', 'Your details': user
          }))
          .catch(err => res.status(500).json({ message: 'Server Error', Error: err }))
      })
  }

  // attempt to sign in, checks to see if account exists
  static signin (req, res) {
    return Users.findOne({
      where: {
        email: req.body.email
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User does not exist' });
        } else if (!bcrypt.compareSync(req.body.password, user.get('password'))) {
          res.status(403).json({ message: 'Wrong password' })
        }
        const token = jwt.sign({ id: user.id, user: user.email }, app.get('secret_key'), { expiresIn: 84000 })
        res.status(200).json({ message: 'Login Successful!', 'User detail': user, Token: token })
      })
      .catch(err => res.status(500).json({
        message: 'Your request was not Processed', err
      }))
  }
}
