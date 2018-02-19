import axios from 'axios'
import { REGISTER_USER} from './actionTypes';

export function registerSuccess() {
    return { type: types.REGISTER_SUCCESS };
}

export function registerUser(credentials) {
    return function (dispatch) {
        return RegisterApi.register(credentials)
            .then((response) => {
                sessionStorage.setItem('registered', true);
                dispatch(registerSuccess());
            })
            .catch((error) => {
                throw (error);
            });
    };
}

const addNewUser = userData => (dispatch) => {
    axios
        .post('/users/signUp', userData)
        .then((res) => {
            localStorage.setItem('message', res.data.message);

            const newUserDetails = {
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                username: res.data.username,
            };

            dispatch(addNewUserAsync(newUserDetails));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default addNewUser;