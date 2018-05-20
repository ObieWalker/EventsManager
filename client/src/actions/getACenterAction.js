
import axios from 'axios';
import {
  IS_CENTER_FETCHING,
  FETCH_CENTER_SUCCESS,
  FETCH_CENTER_FAILURE
} from './actionTypes';

const isCenterFetching = bool => ({
  type: IS_CENTER_FETCHING,
  bool
});


const fetchCenterSuccess = center => ({
  type: FETCH_CENTER_SUCCESS,
  center
});


const fetchCenterFailure = error => ({
  type: FETCH_CENTER_FAILURE,
  error
});

const fetchCenterRequest = centerId => (
  (dispatch) => {
    dispatch(isCenterFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/centers/${centerId}`
    })
      .then((response) => {
        dispatch(fetchCenterSuccess(response.data.center));
        dispatch(isCenterFetching(false));
      }).catch((error) => {
        dispatch(fetchCenterFailure(error.response.data.message));
        dispatch(isCenterFetching(false));
      });
  }
);
export default fetchCenterRequest;
