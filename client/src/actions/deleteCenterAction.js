import axios from 'axios';
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
        token: localStorage.getItem('jwtToken')
      }
    })
      .then((response) => {
        dispatch(deleteCenterSuccess(id, response.data.message));
        dispatch(isCenterDeleting(false));
      }).catch((error) => {
        dispatch(deleteCenterError(error.response.data.message));
        dispatch(isCenterDeleting(false));
      });
  }
);

export default deleteCenterRequest;
