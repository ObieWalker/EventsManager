import axios from 'axios';
import toastr from 'toastr';
import swal from 'sweetalert';

import {
  IS_USER_SETTING,
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from './actionTypes';

const isUserSetting = bool => ({
  type: IS_USER_SETTING,
  bool
});

const setUserSuccess = user => ({
  type: SET_USER_SUCCESS,
  user
});

const setUserFailure = error => ({
  type: SET_USER_FAILURE,
  error
});

const setUserRequest = id => (
  (dispatch) => {
    dispatch(isUserSetting(true));
    return axios({
      method: 'PUT',
      url:
      `/api/v1/users/${id}`
    })
      .then((response) => {
        toastr.success(response.data.message);
        dispatch(setUserSuccess(response.data.user));
        dispatch(isUserSetting(false));
      }).catch((error) => {
        swal({
          title: 'Unable to change user role',
          text: error.response.data.message,
          icon: 'error',
          dangerMode: false,
        });
        dispatch(setUserFailure(error.response.data.message));
        dispatch(isUserSetting(false));
      });
  }
);


export default setUserRequest;
