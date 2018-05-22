import axios from 'axios';

import {
  IS_USER_EVENTS_FETCHING,
  FETCH_USER_EVENTS_SUCCESS,
  FETCH_USER_EVENTS_FAILURE
} from '../actions/actionTypes';


const isUsersEventsFetching = bool => ({
  type: IS_USER_EVENTS_FETCHING,
  bool
});


const fetchUserEventsSuccess = events => ({
  type: FETCH_USER_EVENTS_SUCCESS,
  events
});


const fetchUserEventsFailure = error => ({
  type: FETCH_USER_EVENTS_FAILURE,
  error
});

const getUserEventsRequest = (pageNo, limit) => (
  (dispatch) => {
    dispatch(isUsersEventsFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/user/events/?pageNo=${pageNo}&limit=${limit}`
    }).then((response) => {
      dispatch(fetchUserEventsSuccess(response.data.events));
      dispatch(isUsersEventsFetching(false));
    }).catch((error) => {
      dispatch(fetchUserEventsFailure(error.response.data.info));
      dispatch(isUsersEventsFetching(false));
    });
  }
);

export default getUserEventsRequest;
