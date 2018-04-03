import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// returns true or false if token is verified
const verifyToken = () => {
  const { token } = window.localStorage;
  let verified;
  // if token exists and verified = true
  if (token) {
    jwt.verify(token, process.env.SECRET, (error) => {
      if (error) {
        console.log('secret keyyyyy', process.env.PORT);
        console.log('this is the token error', error);
        console.log('token exists but its falsy');
        verified = false;
      } else {
        console.log('so wtf is wrong then');
        verified = true;
      }
    });
  } else {
    console.log('no token exists at all at all');
    verified = 0;
  }
  return verified;
};
export default verifyToken;
