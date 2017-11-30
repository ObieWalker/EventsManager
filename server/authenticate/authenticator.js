import jwt from 'jsonwebtoken';
import app from '../app';

const Secret = process.env.SECRET;
export default class auth {  
  static authenticate(req, res, next) {//token body and header
    const token = req.body.token || req.query.token || req.headers.token;
    //for login or signup
    if (req.url === '/users/login' || req.url === '/users/') {
      next();//the next middleware function
    } else if (token) {
      jwt.verify(token, Secret, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Failed to authenticate user' });
        }//else  data is input into request
        //save request to use in other routes
        req.decoded = decoded;
        next();
      });
    } else {//if token key is not verified and not existing
      res.status(403).json({ message: 'You do not have a token' });
    }
  }
  // contoller to for an unavailable method
   static unavail(req, res) {
    res.status(405).json({ message: 'Method unavailable' });
  }
};
