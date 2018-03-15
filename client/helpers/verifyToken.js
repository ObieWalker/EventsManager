import jwt from 'jsonwebtoken';

// returns 1 or 0 if token is verified
const verifyToken = () => {
  const token = window.localStorage.jwtToken;
  let verified;
  // if token exists and verified = 1
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (error) => {
      if (error) {
        verified = 0;
      } else {
        verified = 1;
      }
    });
  } else {
    verified = 0;
  }
  return verified;
};
export default verifyToken;
