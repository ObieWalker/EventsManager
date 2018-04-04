
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../models';

dotenv.config();
const Users = User;
// const secret = "1234";
// this will be used for the password encryption
// this is the cost factor set to 2 raised to 13 just because
const saltRound = 13;

export default class UsersController {
  static signup(req, res) {
    console.log(req.body);
    return Users.findAll({
      where: {
        email: req.body.email
      }
    })
      .then((users) => {
        // checks to see if user already exist
        if (users.length > 0) {
          console.log('ikfke');
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
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          password: myPassword,
          verifyPassword: myPassword,
          email: req.body.email
        })
          .then(user => res.status(201).json({
            message: 'Your account has been created!, Your details',
            user: {
              Firstname: user.firstName,
              Lastname: user.lastName,
              Email: user.email
            }
          }))
          .catch(err => res.status(500).json({ message: 'Server Error', Error: err }));
      });
  }

  static signin(req, res) {
    Users.findOne({
      where: { email: req.body.email }
    })
      .then((user) => {
        if (!user) {
          res.status(404).send({
            success: false,
            message: 'This account does not exist on our database'
          });
        } else {
          bcrypt.compare(req.body.password, user.password, (err, hash) => {
            if (!hash) {
              res.status(403).json({ message: 'Wrong password' });
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
              console.log('server side env', process.env.SECRET);
              res.status(200).json({ message: 'Login Successful!', token });
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
}
