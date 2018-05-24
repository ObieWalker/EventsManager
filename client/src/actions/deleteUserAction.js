import axios from 'axios';
import swal from 'sweetalert';
import toastr from 'toastr';

import {
  IS_USER_DELETING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from './actionTypes';


const isUserDeleting = bool => ({
  type: IS_USER_DELETING,
  bool
});

const deleteUserSuccess = (id, message) => ({
  type: DELETE_USER_SUCCESS,
  id,
  message
});


const deleteUserError = error => ({
  type: DELETE_USER_FAILURE,
  error
});


const deleteUserRequest = id => (
  (dispatch) => {
    dispatch(isUserDeleting(true));
    return axios({
      method: 'DELETE',
      url: `/api/v1/users/${id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then((response) => {
        toastr.success(response.data.message);
        dispatch(deleteUserSuccess(id, response.data.message));
        dispatch(isUserDeleting(false));
      }).catch((error) => {
        swal({
          title: 'Unable to delete user',
          text: error.response.data.message,
          icon: 'error',
          dangerMode: false,
        });
        dispatch(deleteUserError(error.response.data.message));
        dispatch(isUserDeleting(false));
      });
  }
);

export default deleteUserRequest;
