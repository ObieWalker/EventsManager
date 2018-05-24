import axios from 'axios';
import swal from 'sweetalert';
import {
  IS_CENTER_DELETING,
  DELETE_CENTER_SUCCESS,
  DELETE_CENTER_FAILURE
} from './actionTypes';


const isCenterDeleting = bool => ({
  type: IS_CENTER_DELETING,
  bool
});

const deleteCenterSuccess = (id, message) => ({
  type: DELETE_CENTER_SUCCESS,
  id,
  message
});


const deleteCenterError = error => ({
  type: DELETE_CENTER_FAILURE,
  error
});


const deleteCenterRequest = id => (
  (dispatch) => {
    dispatch(isCenterDeleting(true));
    return axios({
      method: 'DELETE',
      url: `/api/v1/centers/${id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then((response) => {
        swal({
          title: 'Congratulations',
          text: response.data.message,
          icon: 'success',
          dangerMode: false,
        });
        dispatch(deleteCenterSuccess(id, response.data.message));
        dispatch(isCenterDeleting(false));
      }).catch((error) => {
        swal({
          title: 'Unable to delete',
          text: error.response.data.message,
          icon: 'error',
          dangerMode: false,
        });
        dispatch(deleteCenterError(error.response.data.message));
        dispatch(isCenterDeleting(false));
      });
  }
);

export default deleteCenterRequest;
