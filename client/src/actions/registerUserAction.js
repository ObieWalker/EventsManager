import axios from 'axios';
import { setAuthToken } from '../../helpers/setAuthToken';
import {
  REGISTERING_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from './actionTypes';

const registeringUser = bool => ({
  type: REGISTERING_USER,
  bool
});
const registerUserSuccess = userInfo => ({
  type: REGISTER_USER_SUCCESS,
  payload: userInfo
});

const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  error
});

const registerUser = userInfo => (dispatch) => {
  dispatch(registeringUser(true));
  return axios
    .post('/api/v1/users', userInfo)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      dispatch(registerUserSuccess(userInfo));
    })
    .catch((error) => {
      localStorage.setItem('message', error.response.data.message);
      dispatch(registerUserFailure(error.response.data.message));
      dispatch(registeringUser(false));
    });
};
export default registerUser;
