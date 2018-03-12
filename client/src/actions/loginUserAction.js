import axios from 'axios'
import {setAuthToken} from '../../helpers/setAuthToken'

import { LOGIN_USER } from './actionTypes';

const loginUserAsync = userInfo => ({
    type: LOGIN_USER,
    payload: userInfo
})

const loginUser = userInfo => (dispatch) => {
    console.log("log in attempts")
    return axios.post('/api/v1/users/login', userInfo)
        .then((response) => {
            console.log("response = ", response)
            //const { token, userInfo } = response.data;
            const token = response.data.token;
            console.log(token)
            localStorage.setItem('jwtToken', token);
            console.log("set item")
            setAuthToken(token);
            console.log("before dispatch")
            dispatch(loginUserAsync(userInfo));
            console.log("after dispatch")
        })
        .catch(error => localStorage.setItem('message', error.response.data.message))
}
export default loginUser;