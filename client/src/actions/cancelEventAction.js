import axios from 'axios';
import swal from 'sweetalert';

import {
  IS_EVENT_CANCELING,
  CANCEL_EVENT_SUCCESS,
  CANCEL_EVENT_FAILURE
} from './actionTypes';

const isEventDeleting = bool => ({
  type: IS_EVENT_CANCELING,
  bool
});


const cancelEventSuccess = (eventId, message) => ({
  type: CANCEL_EVENT_SUCCESS,
  payload: eventId,
  message
});

const cancelEventFailure = error => ({
  type: CANCEL_EVENT_FAILURE,
  error
});


const cancelEvent = id => (
  (dispatch) => {
    dispatch(isEventDeleting(true));
    localStorage.getItem('token');
    if (axios.defaults.headers.common.token === '') {
      axios.defaults.headers.common.token = localStorage.getItem('token');
    }
    return axios({
      method: 'DELETE',
      url: `/api/v1/admin/events/${id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    }).then((response) => {
      swal({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        dangerMode: false,
      });
      dispatch(cancelEventSuccess(response.data.eventId, response.data.message));
      dispatch(isEventDeleting(false));
    }).catch((error) => {
      swal({
        title: 'Unable to cancel',
        text: error.response.data.message,
        icon: 'error',
        dangerMode: false,
      });
      dispatch(cancelEventFailure(error.response.data.message));
      dispatch(isEventDeleting(false));
    });
  });
export default cancelEvent;
