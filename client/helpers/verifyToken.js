import jwt from 'jsonwebtoken';

// returns true or false if token is verified
const verifyToken = () => {
  const { token } = window.localStorage;
  let verified;
  // if token exists and verified = true
  if (token) {
    jwt.verify(token, process.env.SECRET, (error) => {
      if (error) {
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
