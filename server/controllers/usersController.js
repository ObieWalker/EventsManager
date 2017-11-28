import validator from 'validatorjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models';
import app from '../app';


const { Users } = models;

// this will be used for the password encryption
//this is the cost factor set to 2 raised to 13 just because
const saltRound = 13;

// conditions to sign in
const signinConditions = {
  email: 'required|email',
  password: 'required|min:5',
};
//conditions to sign up
const signupConditions = {
  firstname: 'required|string|min:3',
  lastname: 'required|string|min:3',
  username: 'required|string|min:3',
  email: 'required|varchar|email',
  password: 'required|min:5',
  verifyPassword: 'required|min:5',
};


//this will create a new user 
const UsersController = {
  signup(req, res) {
    const validate = new validator(req.body, signupConditions);

    if (validate.passes()) {
      return Users.findAll({
        where: {
          email: req.body.email,
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
          	//passwords must match 
            return res.status(400).json({ message: 'password did not match' });
          }//password encrypt at 2 raised to power 13
          const myPassword = bcrypt.hashSync(req.body.password, saltRound);
          //creates account
          return Users.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: myPassword,
            email: req.body.email,
          })
            .then(user => res.status(200).json({
              message: 'Your account has been created!', 'Your details': user,
            }))
            .catch(err => res.status(500).json({ message: 'Server Error', Error: err }));
        });
    }
    const errors = Object.values(validate.errors.errors).map(val => val[0]);
    res.status(400).json({ message: errors });
  },


  // attempt to sign in, checks to see if account exists
  signin(req, res) {
    const signinValidator = new validator(req.body, signinConditions);
    if (signinValidator.passes()) {
      return Users.findOne({
        where: {
          email: req.body.email
        },
      })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
          } else if (!bcrypt.compareSync(req.body.password, user.get('password'))) {
            res.status(403).json({ message: 'Wrong password' });
          }//
          const token = jwt.sign({ id: user.id, user: user.email }, app.get('secret_key'), { expiresIn: 84000 });
          res.status(200).json({ message: 'Login Successful!', 'User detail': user, Token: token });
        })
        .catch(err => res.status(500).json({
          message: 'Your request was not Processed',
          err
        }));
    }
    const errors = Object.values(signinValidator.errors.errors).map(val => val[0]);
    res.status(400).json({ message: errors });
  },


  //returns one user that matches
  user(req, res) {
    return Users.findOne({
      where: {
        id: req.params.userId
      },
      attributes: ['id', 'username', 'email', 'firstname', 'lastname']
    }).then((user) => {
      if (!user) {
        res.status(404).json({ message: 'No user with this information exists' });
      }
      res.status(200).json(user);
    }).catch(err => res.status(500).json({ Message: 'Error!!', Error: err }));
  },

  //the user profile
  userProfile(req, res) {
  	//
    if (!req.decoded.id) {
      res.status(403).json({ message: 'You do not have the authorization to see this page' });
    }
    return Users.findOne({
      where: {//when a match
        id: req.decoded.id
      },
    }).then(user => res.status(200).json(user))
      .catch(err => res.status(500).json(err));
  },

  //checks certain parameters before the put method
  updateProfile(req, res) {
    if (!req.decoded.id) {
      res.status(403).json({ message: 'Invalid request' });
    }//change password
    if (req.body.newPassword && req.body.password === req.body.newPassword) {
      res.status(400).json({ message: 'password Must Differ' });
    }
    Users.findOne({
      where: {
        email: req.decoded.user
      }
    }).then((user) => {
    	//set new password to hash or 
      const newPassword = req.body.newPassword ? bcrypt.hashSync(req.body.newPassword, saltRound) : '';
      user.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: newPassword || req.body.password,
        aboutme: req.body.aboutme,
        photo: req.body.photo,
      }).then(() => res.status(200).json({ message: 'You have updated your profile', profile: user }));
    }).catch(err => res.status(500).json({ Error: err }));
  }
};

export default UsersController;
