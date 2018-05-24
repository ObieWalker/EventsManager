import axios from 'axios';
import {
  IS_USERS_FETCHING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './actionTypes';

const isUsersFetching = bool => ({
  type: IS_USERS_FETCHING,
  bool
});


const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  users
});


const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  error
});

const fetchUsersRequest =
(pageNo = 1, limit = 6, filter = '') => (
  (dispatch) => {
    const searchParams = `filter=${filter}`;
    dispatch(isUsersFetching(true));
    return axios({
      method: 'GET',
      url:
      `/api/v1/users/?${searchParams}&pageNo=${pageNo}&limit=${limit}`
    })
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data.users));
        dispatch(isUsersFetching(false));
      }).catch((error) => {
        dispatch(fetchUsersFailure(error.response.data.message));
        dispatch(isUsersFetching(false));
      });
  }
);


export default fetchUsersRequest;
