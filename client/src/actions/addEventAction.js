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
    console.log(localStorage.getItem('jwtToken'));
    if (axios.defaults.headers.common.token === '') {
      axios.defaults.headers.common.token = localStorage.getItem('jwtToken');
    }
    console.log('=====>', eventDetails);
    return axios({
      method: 'POST',
      url: '/api/v1/events',
      headers: {
        token: localStorage.getItem('jwtToken')
      },
      data: eventDetails
    }).then((response) => {
      console.log('=======>', response);
      const { message } = response.eventInfo;
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
  // imageUrl));
}
);
export default createEventRequest;
