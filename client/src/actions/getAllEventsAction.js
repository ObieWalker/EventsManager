import axios from 'axios';
import {
  IS_EVENTS_FETCHING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from './actionTypes';

const isEventsFetching = bool => ({
  type: IS_EVENTS_FETCHING,
  bool
});


const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  events
});


const fetchEventsFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  error
});

const fetchEventsRequest = () => (
  (dispatch) => {
    dispatch(isEventsFetching(true));
    return axios({
      method: 'GET',
      url: '/api/v1/events'
    })
      .then((response) => {
        dispatch(fetchEventsSuccess(response.data.Events));
        dispatch(isEventsFetching(false));
      }).catch((error) => {
        dispatch(fetchEventsFailure(error.response.data.message));
        dispatch(isEventsFetching(false));
      });
  }
);
export default fetchEventsRequest;
