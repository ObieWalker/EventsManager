import axios from 'axios';
import toastr from 'toastr';
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
const registerUserSuccess = userMessage => ({
  type: REGISTER_USER_SUCCESS,
  payload: userMessage
});

const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  error
});

const registerUser = userInfo => ((dispatch) => {
  dispatch(registeringUser(true));
  return axios
    .post('/api/v1/users', userInfo)
    .then((response) => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      dispatch(registerUserSuccess(response.data.message));
      dispatch(registeringUser(false));
    })
    .catch((error) => {
      toastr.error(error.response.data.message);
      dispatch(registerUserFailure(error.response.data.message));
      dispatch(registeringUser(false));
    });
}
);
export default registerUser;
