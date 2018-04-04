import axios from 'axios';
import swal from 'sweetalert';

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
    console.log('test');
    return axios({
      method: 'POST',
      url: '/api/v1/events',
      headers: {
        token: localStorage.getItem('token')
      },
      data: eventDetails,
    }).then((response) => {
      console.log('=======>', response);
      const { message } = response.message;
      console.log(response.message);
      swal({
        title: 'Congratulations',
        text: response.message,
        icon: 'success',
        dangerMode: false,
      });
      dispatch(createEventSuccess(response.data.event, message));
      dispatch(isEventCreating(false));
    }).catch((error) => {
      swal({
        title: 'There was a problem',
        text: error,
        icon: 'error',
        dangerMode: true,
      });
      dispatch(createEventFailure(error.response.data.message));
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
