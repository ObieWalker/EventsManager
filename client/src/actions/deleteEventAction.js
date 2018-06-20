import axios from 'axios';
import swal from 'sweetalert';

import {
  IS_EVENT_DELETING,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT
} from './actionTypes';

const isEventDeleting = bool => ({
  type: IS_EVENT_DELETING,
  bool
});

const deleteEventSuccess = (eventId, message) => ({
  type: DELETE_EVENT_SUCCESS,
  payload: eventId,
  message
});

const deleteEvent = id => ({
  type: DELETE_EVENT,
  id,
});

const deleteEventFailure = error => ({
  type: DELETE_EVENT_FAILURE,
  error
});

const deleteAnEvent = event => (dispatch) => {
  dispatch(isEventDeleting(true));
  localStorage.getItem('token');
  if (axios.defaults.headers.common.token === '') {
    axios.defaults.headers.common.token = localStorage.getItem('token');
  }
  return axios({
    method: 'DELETE',
    url: `/api/v1/events/${event.id}`,
    headers: {
      token: localStorage.getItem('token')
    }
  })
    .then((response) => {
      const { eventId, message } = response.data;
      swal({
        title: 'Congratulations',
        text: message,
        icon: 'success',
        dangerMode: false
      });
      dispatch(deleteEventSuccess(eventId, message));
      dispatch(deleteEvent(eventId));
      dispatch(isEventDeleting(false));
    })
    .catch((error) => {
      swal({
        title: 'Unable to delete',
        text: error.response.data.message,
        icon: 'error',
        dangerMode: false
      });
      dispatch(deleteEventFailure(error.response.data.message));
      dispatch(isEventDeleting(false));
    });
};
export default deleteAnEvent;
