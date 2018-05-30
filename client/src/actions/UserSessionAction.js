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
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
      const decoded = jwt.decode(response.data.token);
      dispatch(setUser(response.data.user));
      toastr.success(`Welcome ${decoded.firstName}`);
    });

export default login;

