
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import models from '../models'

const Users = models.Users

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
          })
        } // ensures both entries to password match
        if (req.body.password !== req.body.verifyPassword) {
        // passwords must match
          return res.status(400).json({ message: 'password did not match' })
        } // password encrypt at 2 raised to power 13
        const myPassword = bcrypt.hashSync(req.body.password, saltRound)
        // creates account
        return Users.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          password: myPassword,
          email: req.body.email
        })
          .then(user => res.status(201).json({
            message: 'Your account has been created!', 'Your details': user
          }))
          .catch(err => res.status(500).json({ message: 'Server Error', Error: err }))
      })
  }

  static signin (req, res) {
    Users.findOne({
      where: { email: req.body.email }
    })
      .then((user) => {
        if (!user) {
          res.status(404).send({
            success: false,
            message: 'This account does not exist on our database'
          })
        } else {
          bcrypt.compare(req.body.password, user.password, (err, hash) => {
            if (!hash) { res.status(403).json({ message: 'Wrong password' });
            } else if (hash) {
              const payload = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                username: user.username,
                id: user.id
              };
              const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' });
              res.status(200).json({ message: 'Login Successful!', 'Your details are ': user, Token: token });
            }
          })
        }
       })
        .catch((error) => {
          res.status(400).send({
            success: false,
            error
          })
        })
    }
}
