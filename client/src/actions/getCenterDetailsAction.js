import axios from 'axios'

import { GET_CENTER_DETAILS } from './actionTypes'

const getCenterAsync = (center) => ({
    type: GET_CENTER_DETAILS,
    payload: center
})

const getCenter = centerId => (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios
        .get(`/centers/${centerId}`)
        .then((res) => {
            localStorage.setItem('message', res.data.message);
            dispatch(getCenterAsync(res.data.center));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default getCenter;