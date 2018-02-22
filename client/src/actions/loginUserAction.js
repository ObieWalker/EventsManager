import axios from 'axios'

import { LOGIN_USER } from './actionTypes';

const loginUserAsync = userInfo => ({
    type: LOGIN_USER,
    payload: userInfo
})

const loginUser = userInfo => (dispatch) => {
    axios
        .post('/users/login', userInfo)
        .then((res) => {
            localStorage.setItem('message', res.data.message);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);

            dispatch(loginUserAsync(userInfo));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message))
}
export default loginUser;