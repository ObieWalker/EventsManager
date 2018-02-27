import axios from 'axios';

import { GET_USER_EVENTS } from '../actions/actionTypes'

const getUserEventsAsync = getAllEventsDetail => ({
    type: GET_USER_EVENTS,
    payload: getAllEventsDetail,
});

const getUserEvents = userIdNo => (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios
        .get(`/user/events/${userIdNo}`)
        .then((res) => {
            localStorage.setItem('message', res.data.message);
            dispatch(getUserEventsAsync(res.data.event));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default getUserEvents;