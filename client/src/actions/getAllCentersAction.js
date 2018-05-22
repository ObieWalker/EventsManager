import axios from 'axios';
import {
  IS_CENTERS_FETCHING,
  FETCH_CENTERS_SUCCESS,
  FETCH_CENTERS_FAILURE,
  CLEAR_CENTER_STATE
} from './actionTypes';

const isCentersFetching = bool => ({
  type: IS_CENTERS_FETCHING,
  bool
});


const fetchCentersSuccess = centers => ({
  type: FETCH_CENTERS_SUCCESS,
  centers
});


const fetchCentersFailure = error => ({
  type: FETCH_CENTERS_FAILURE,
  error
});

const clearAllCenters = empty => ({
  type: CLEAR_CENTER_STATE,
  empty
});

const fetchCentersRequest =
(pageNo = 1, limit = 6, filter = '', facility = '', capacity = '') => (
  (dispatch) => {
    const searchParams = `filter=${filter}&facility=${facility}&capacity=${capacity}`;
    dispatch(isCentersFetching(true));
    return axios({
      method: 'GET',
      url:
      `/api/v1/centers?${searchParams}&pageNo=${pageNo}&limit=${limit}`
    })
      .then((response) => {
        dispatch(fetchCentersSuccess(response.data.centers));
        dispatch(isCentersFetching(false));
      }).catch((error) => {
        dispatch(fetchCentersFailure(error.response.data.message));
        dispatch(isCentersFetching(false));
      });
  }
);

export const clearCenterState = () => (dispatch) => {
  dispatch(clearAllCenters([]));
};

export default fetchCentersRequest;
