import axios from 'axios';
import toastr from 'toastr';
import jwt from 'jsonwebtoken';
import { setAuthToken } from '../../helpers/setAuthToken';

import { SET_CURRENT_USER } from './actionTypes';
/**
 * @returns {object} user
 *
 * @param {any} user
 */
export function setUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}


const login = userInfo =>
  dispatch => axios.post('/api/v1/users/login', userInfo)
    .then((response) => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      const decoded = jwt.decode(token);
      console.log('this is decoded token ======>>', decoded);
      dispatch(setUser(decoded));
      toastr.success(`Welcome ${decoded.firstName}`);
    })
    .catch((error) => {
      toastr.error('Please enter a valid email or password combination');
      return error.message;
    });

export default login;

