import axios from 'axios';
import { setAuthToken } from '../../helpers/setAuthToken';
import { REGISTER_USER } from './actionTypes';

const registerUserAsync = userInfo => ({
  type: REGISTER_USER,
  payload: userInfo
});

const registerUser = userInfo => dispatch => (
  axios.post('/api/v1/users', userInfo)
    .then((res) => {
      console.log(res);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      dispatch(registerUserAsync(userInfo));
      console.log('registered');
    })
    .catch(error =>
      localStorage.setItem('message', error.response.data.message))
);
export default registerUser;
