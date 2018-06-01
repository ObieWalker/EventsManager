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

const login = (userInfo, history) => (
  (dispatch) => {
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
      }).catch((error) => {
        console.log(error);
      });
  });

export default login;
