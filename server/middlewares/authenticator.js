import jwt from 'jsonwebtoken'

export default class auth {
  static authenticate (req, res, next) {
    const token = req.body.token || req.query.token || req.headers.token

    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Failed to authenticate user' });
        }
        // the user data is stored
        req.decoded = decoded
        next()
      })
    } else {
      res.status(403).json({ message: 'No token, please sign up or sign in' })
    }
  }
};
