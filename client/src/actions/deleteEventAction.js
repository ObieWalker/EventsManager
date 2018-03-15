import axios from 'axios'

import { DELETE_AN_EVENT} from './actionTypes'

const deleteAnEventAsync = (eventId) => ({
    type: DELETE_AN_EVENT,
    payload: eventId
})

const deleteAnEvent = (eventId) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios
        .delete(`events/${eventId}`)
        .then((res) => {
            localStorage.setItem('message', res.data.message);
            dispatch(deleteAnEventAsync(eventId));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message));
}
export default deleteAnEvent;