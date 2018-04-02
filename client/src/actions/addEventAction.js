import axios from 'axios';

import {
  IS_EVENT_CREATING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE
} from './actionTypes';

const isEventCreating = bool => ({
  type: IS_EVENT_CREATING,
  bool
});

const createEventSuccess = (event, message) => ({
  type: CREATE_EVENT_SUCCESS,
  event,
  message
});

const createEventFailure = error => ({
  type: CREATE_EVENT_FAILURE,
  error
});

const addEvent = eventDetails => (
  (dispatch) => {
    localStorage.getItem('token');
    if (axios.defaults.headers.common.token === '') {
      axios.defaults.headers.common.token = localStorage.getItem('token');
    }
    const test = localStorage.getItem('token');
    console.log(test);
    return axios({
      method: 'POST',
      url: '/api/v1/events',
      headers: {
        token: localStorage.getItem('token')
      },
      data: eventDetails,
    }).then((response) => {
      console.log('=======>', response);
      const { message } = response.eventInfo;
      console.log(response.info);
      dispatch(createEventSuccess(response.eventInfo.event, message));
      dispatch(isEventCreating(false));
    }).catch((error) => {
      dispatch(createEventFailure(error.response.eventInfo.message));
      dispatch(isEventCreating(false));
    });
  }
);

const createEventRequest = event => ((dispatch) => {
  dispatch(isEventCreating(true));
  console.log('add event');
  return dispatch(addEvent(event));
}
);
export default createEventRequest;
