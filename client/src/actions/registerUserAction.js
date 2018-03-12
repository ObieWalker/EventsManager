import axios from 'axios'
import { setAuthToken } from '../../helpers/setAuthToken'
import { REGISTER_USER } from './actionTypes';

const registerUserAsync = userInfo => ({
    type: REGISTER_USER,
    payload: userInfo
})

const registerUser = userInfo => (dispatch => {
    console.log("tests api")
    return axios.post('/api/v1/users', userInfo)
        .then((res) => {
            console.log("test")
            const { token, userInfo } = res.data
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(registerUserAsync(userInfo));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message))
})


export default registerUser;