import axios from 'axios';
import {
  IS_CENTERS_FETCHING,
  FETCH_CENTERS_SUCCESS,
  FETCH_CENTERS_FAILURE
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

const fetchCentersRequest = pageNo => (
  (dispatch) => {
    dispatch(isCentersFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/centers?pageNo=${pageNo}`
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
export default fetchCentersRequest;
