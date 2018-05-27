import axios from 'axios';
import toastr from 'toastr';
import {
  IS_USER_HISTORY_FETCHING,
  FETCH_USER_HISTORY_SUCCESS,
  FETCH_USER_HISTORY_FAILURE
} from '../actions/actionTypes';


const isUsersHistoryFetching = bool => ({
  type: IS_USER_HISTORY_FETCHING,
  bool
});


const fetchUserHistorySuccess = history => ({
  type: FETCH_USER_HISTORY_SUCCESS,
  history
});


const fetchUserHistoryFailure = error => ({
  type: FETCH_USER_HISTORY_FAILURE,
  error
});

const getUserHistoryRequest = (pageNo, limit) => (
  (dispatch) => {
    dispatch(isUsersHistoryFetching(true));
    return axios({
      method: 'GET',
      url: `/api/v1/user/history/?pageNo=${pageNo}&limit=${limit}`
    }).then((response) => {
      dispatch(fetchUserHistorySuccess(response.data.events));
      dispatch(isUsersHistoryFetching(false));
    }).catch((error) => {
      toastr.error(error.response.data.message);
      dispatch(fetchUserHistoryFailure(error.response.data.message));
      dispatch(isUsersHistoryFetching(false));
    });
  }
);

export default getUserHistoryRequest;
