import axios from 'axios'

import { REGISTER_USER } from './actionTypes';

const registerUserAsync = userInfo => ({
    type: REGISTER_USER,
    payload: userInfo
})

const registerUser = userInfo => (dispatch) => {
    axios
        .post('/users', userInfo)
        .then((res) => {
            localStorage.setItem('message', res.data.message);

            const newUserDetails = {
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                username: res.data.username,
                email: res.data.email,
            };

            dispatch(registerUserAsync(userInfo));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message))
}
export default registerUser;