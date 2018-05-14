import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// returns true or false if token is verified
const verifyToken = () => {
  const { token } = window.localStorage;
  let verified;
  // if token exists and verified = true
  if (token) {
    console.log('==>>there is a token');
    jwt.verify(token, process.env.SECRET, (error) => {
      if (error) {
        // console.log('======>>> this is the error', error);
        // console.log('==>>there is a token but error');
        verified = false;
      } else {
        console.log('==>>there is a token, everything is fine');
        verified = true;
      }
    });
  } else {
    console.log('==>>no token');
    verified = 0;
  }
  return verified;
};
export default verifyToken;
