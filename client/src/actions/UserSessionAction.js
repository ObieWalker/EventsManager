import axios from 'axios';
import toastr from 'toastr';
import jwt from 'jsonwebtoken';
import { setAuthToken } from '../../helpers/setAuthToken';

import { SET_CURRENT_USER } from './actionTypes';

export function setUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

function setCurrentUser(actionType, response, dispatch) {
  console.log('coming out of login, into set current user');
  console.log(response);
  const { token } = response.data;
  localStorage.setItem('jwtToken', token);
  setAuthToken(token);
  console.log(token);
  const decoded = jwt.decode(token);
  console.log('this is your password', decoded.firstName);
  console.log(`oh hi  ${decoded.firstName} ${decoded.lastName}`);

  console.log('action type==>', actionType);
  if (actionType === SET_CURRENT_USER) {
    console.log(`oh hi 2ND TIME ${decoded.firstName} ${decoded.lastName}`);
    toastr.success(`oh hi ${decoded.firstName} ${decoded.lastName}`);
  } else {
    console.log('not obi at all');
  }
  console.log('this is decoded value==>', decoded);
  dispatch(setUser(decoded));
}

const login = userInfo =>
  dispatch => axios.post('/api/v1/users/login', userInfo)
    .then(response => setCurrentUser(SET_CURRENT_USER, response, dispatch))
    .catch((error) => {
      if (error) {
        toastr.error('Please enter a valid email or password combination');
        return error.message;
      }
    });

export default login;

