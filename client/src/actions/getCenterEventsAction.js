import axios from 'axios';

import {
  IS_CENTER_EVENTS_FETCHING,
  FETCH_CENTER_EVENTS_SUCCESS,
  FETCH_CENTER_EVENTS_FAILURE
} from '../actions/actionTypes';


const isCenterEventsFetching = bool => ({
  type: IS_CENTER_EVENTS_FETCHING,
  bool
});


const fetchCenterEventsSuccess = events => ({
  type: FETCH_CENTER_EVENTS_SUCCESS,
  events
});


const fetchCenterEventsFailure = error => ({
  type: FETCH_CENTER_EVENTS_FAILURE,
  error
});

const getCenterEventsRequest = (pageNo, limit) => (
  (dispatch) => {
    dispatch(isCenterEventsFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/user/events/?pageNo=${pageNo}&limit=${limit}`
    }).then((response) => {
      dispatch(fetchCenterEventsSuccess(response.data.events));
      dispatch(isCenterEventsFetching(false));
    }).catch((error) => {
      dispatch(fetchCenterEventsFailure(error.response.data.info));
      dispatch(isCenterEventsFetching(false));
    });
  }
);

export default getCenterEventsRequest;
