import axios from 'axios';

import { ADD_EVENT } from './actionTypes';

const addNewEventAsync = newEvent => ({
  type: ADD_EVENT,
  payload: newEvent
});

const addNewEvent = newEvent => (dispatch) => {
  axios.defaults.headers.common.Authorization =
  `Bearer ${localStorage.getItem('token')}`;
  axios
    .post('/events', newEvent)
    .then((res) => {
      localStorage.setItem('message', res.data.message);
      dispatch(addNewEventAsync(res.data.event));
    })
    .catch(error =>
      localStorage.setItem('message', error.response.data.message));
};
export default addNewEvent;
