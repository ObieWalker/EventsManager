import axios from 'axios';
import { setAuthToken } from '../../helpers/setAuthToken';

import { LOGIN_USER } from './actionTypes';

const loginUserAsync = userInfo => ({
  type: LOGIN_USER,
  payload: userInfo
});

const loginUser = userInfo => dispatch =>
  axios.post('/api/v1/users/login', userInfo)
    .then((response) => {
    // const { token, userInfo } = response.data;
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(loginUserAsync(userInfo));
    })
    .catch(error =>
      localStorage.setItem('message', error.response.data.message));
export default loginUser;
