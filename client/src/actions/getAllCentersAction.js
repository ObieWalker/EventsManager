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

const fetchCentersRequest = () => (
  (dispatch) => {
    dispatch(isCentersFetching(true));
    console.log('dispatching just before axios');
    return axios({
      method: 'GET',
      url: '/api/v1/centers'
    })
      .then((response) => {
        console.log(response.data.Centers);
        dispatch(fetchCentersSuccess(response.data.Centers));
        dispatch(isCentersFetching(false));
      }).catch((error) => {
        dispatch(fetchCentersFailure(error.response.data.message));
        dispatch(isCentersFetching(false));
      });
  }
);
export default fetchCentersRequest;
