import axios from 'axios';
import {
  IS_CENTER_DELETING,
  DELETE_CENTER_SUCCESS,
  DELETE_CENTER_FAILURE
} from './actionTypes';

/**
 * @description handles delete user center loader
 *
 * @param { boolean } bool - contains center deteling state boolean
 *
 * @returns { object } loader - returns delete center loader action
 */
const isCenterDeleting = bool => ({
  type: IS_CENTER_DELETING,
  bool
});

/**
 * @description handles delete user center success
 *
 * @param { number } id - ID of center to be deleted
 * @param { string } message - contains delete success message
 *
 * @returns { object } deleted center - returns delete center success action
 */
const deleteCenterSuccess = (id, message) => ({
  type: DELETE_CENTER_SUCCESS,
  id,
  message
});

/**
 * @description handles delete center success
 *
 * @param { number } error - ID of center that will be deleted
 *
 * @returns { object } center error - returns failure action
 */
const deleteCenterError = error => ({
  type: DELETE_CENTER_FAILURE,
  error
});

/**
 * @description deletes a center
 *
 * @param { object } id - contains ID of center to be deleted
 *
 * @returns { object } deleted center - returns delete user center action
 */
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
