import axios from 'axios';
import toastr from 'toastr';
import {
  IS_CENTER_EVENTS_FETCHING,
  FETCH_CENTER_EVENTS_SUCCESS,
  FETCH_CENTER_EVENTS_FAILURE,
  CLEAR_CENTER_EVENTS
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

const clearAllCenterEvent = empty => ({
  type: CLEAR_CENTER_EVENTS,
  empty
});

const getCenterEventsRequest = (centerId, pageNo, limit) => (
  (dispatch) => {
    dispatch(isCenterEventsFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/center/events/${centerId}?pageNo=${pageNo}&limit=${limit}`
    }).then((response) => {
      dispatch(fetchCenterEventsSuccess(response.data.events));
      dispatch(isCenterEventsFetching(false));
    }).catch((error) => {
      toastr.error(error.response.data.message);
      dispatch(fetchCenterEventsFailure(error.response.data.message));
      dispatch(isCenterEventsFetching(false));
    });
  }
);

export const clearCenterEvents = () => (dispatch) => {
  dispatch(clearAllCenterEvent([]));
};

export default getCenterEventsRequest;
