import jwt from 'jsonwebtoken';
import app from '../app';

export default class auth {
  authenticate (req, res, next) { // token body and header
    // moves to the next handler (middleware)
    const token = req.body.token || req.query.token || req.headers.token;

    if (req.url === '/users/signin' || req.url === '/users/signup') {
      next();
    } else if (token) {
      jwt.verify(token, app.get('secret_key'), (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Failed to authenticate user' });
        }
        req.decoded = decoded
        next();
      });
    } else {
      res.status(403).json({ message: 'No token, please sign in' });
    }
  }
  // contoller to for methods not implemented
  notImplemented (req, res) {
    res.status(405).json({ message: 'Method not implemented at the moment' });
  }
};
