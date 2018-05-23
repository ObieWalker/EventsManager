import axios from 'axios';
import swal from 'sweetalert';

import {
  IS_EVENT_UPDATING,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE
} from './actionTypes';

const isEventCreating = bool => ({
  type: IS_EVENT_UPDATING,
  bool
});

const updateEventSuccess = (event, message) => ({
  type: UPDATE_EVENT_SUCCESS,
  event,
  message
});

const updateEventFailure = error => ({
  type: UPDATE_EVENT_FAILURE,
  error
});

const updateEventRequest = event => (
  (dispatch) => {
    console.log('event id ===>>', event.eventId);
    dispatch(isEventCreating(true));
    localStorage.getItem('token');
    if (axios.defaults.headers.common.token === '') {
      axios.defaults.headers.common.token = localStorage.getItem('token');
    }
    return axios({
      method: 'PUT',
      url: `/api/v1/events/${event.eventId}`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: event,
    }).then((response) => {
      const { message } = response.data.message;
      swal({
        title: 'Congratulations',
        text: response.data.message,
        icon: 'success',
        dangerMode: false,
      });
      dispatch(updateEventSuccess(response.data.newEvent, message));
      dispatch(isEventCreating(false));
    }).catch((error) => {
      console.log('this is the error response==>>', error.response.data.error);
      swal({
        title: 'Unable to make booking.',
        text: error.response.data.message,
        icon: 'error',
        dangerMode: true,
      });
      dispatch(updateEventFailure(error.response.data.message));
      dispatch(isEventCreating(false));
    });
  }
);

export default updateEventRequest;
