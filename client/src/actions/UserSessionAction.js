import axios from 'axios';
import toastr from 'toastr';
import jwt from 'jsonwebtoken';
import { setAuthToken } from '../../helpers/setAuthToken';

import { SET_CURRENT_USER, SET_USER_FAILURE } from './actionTypes';
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
/**
 *
 *
 * @export
 * @param {any} error
 * @returns {object} error
 */
export function setUserFailure(error) {
  return {
    type: SET_USER_FAILURE,
    error
  };
}
const login = (userInfo, history) => (dispatch) => {
  const userData = userInfo;
  return axios({
    method: 'POST',
    url: '/api/v1/users/login',
    data: userData
  })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
      const decoded = jwt.decode(response.data.token);
      dispatch(setUser(response.data.user));
      if (response.data.user) {
        if (response.data.user.isAdmin) {
          history.push('/admin');
        } else {
          history.push('/dashboard');
        }
      }
      toastr.success(`Welcome ${decoded.firstName}`);
    })
    .catch((error) => {
      dispatch(setUser(error.response.data.message));
      toastr.success(error.response.data.message);
      console.log(error.response.data.message);
    });
};

export default login;
