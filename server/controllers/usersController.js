import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models';
import app from '../app';


const Users = models.Users;

const Secret = process.env.SECRET;
// this will be used for the password encryption
//this is the cost factor set to 2 raised to 13 just because
const saltRound = 13;


export default class UsersController {
//this will create a new user 
  static signup(req, res) {
    Users.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: myPassword,
      email: req.body.email,
    })
    .then(user => res.status(200).json({
        message: 'Your account has been created!', 'Your details': user,
    }))
    .catch(error => res.status(400).send( err ));
  }
     
  

  // attempt to sign in, checks to see if account exists
  static signin(req, res) {
    Users.findOne({
        where: {
          email: req.body.email
        },
      })
      .then((user) => {
          if (!user) {//not found
            return res.status(404).json({ message: 'User does not exist' });
          } else if (!bcrypt.compareSync(req.body.password, user.get('password'))) {
            //forbidden
            res.status(403).json({ message: 'Wrong password' });
          }//
          const token = jwt.sign({ id: user.id, user: user.email }, Secret, { expiresIn: 840000 });
          res.status(200).json({ message: 'Login Successful!', 'Your details are ': user, Token: token });
        })
        .catch(err => res.status(500).json({
          message: 'Your request was not Processed',
          Error:err
        }));
    }
  }