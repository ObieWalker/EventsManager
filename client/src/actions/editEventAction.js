import axios from 'axios';

import { EDIT_AN_EVENT } from './actionTypes';

const updateAnEventAsync = (changeState, eventId) => ({
  type: EDIT_AN_EVENT,
  payload: {
    changeState,
    eventId,
  },
});

const editAnEvent = (changeState, eventId) => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
  axios
    .put(`/events/${eventId}`, changeState)
    .then((res) => {
      localStorage.setItem('message', res.data.message);
      dispatch(updateAnEventAsync(changeState, eventId));
    })
    .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default editAnEvent;
