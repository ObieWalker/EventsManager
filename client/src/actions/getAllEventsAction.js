import axios from 'axios';
import toastr from 'toastr';
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

const fetchEventsRequest = (pageNo, limit) => (
  (dispatch) => {
    dispatch(isEventsFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/events?pageNo=${pageNo}&limit=${limit}`
    })
      .then((response) => {
        dispatch(fetchEventsSuccess(response.data.events));
        dispatch(isEventsFetching(false));
      }).catch((error) => {
        if (error.response.data.message !== 'No events available') {
          toastr.error(error.response.data.message);
        }
        toastr.error(error.response.data.message);
        dispatch(fetchEventsFailure(error.response.data.message));
        dispatch(isEventsFetching(false));
      });
  }
);
export default fetchEventsRequest;
