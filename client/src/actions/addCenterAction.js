import axios from 'axios'

import {ADD_A_CENTER} from './actionTypes'

const addCenterAsync = (newCenter) => ({
    type: ADD_A_CENTER,
    payload: center
})

const addCenter = (newCenter) => (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios
        .post('/centers', newCenter)
        .then((res) => {
            localStorage.setItem('message', res.data.message);
            dispatch(addCenterAsync(res.data.center));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default addCenter;