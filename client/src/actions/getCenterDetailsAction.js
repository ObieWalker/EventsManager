import axios from 'axios';

import { GET_CENTER_DETAILS } from './actionTypes';

const getCenterDetails = center => ({
  type: GET_CENTER_DETAILS,
  payload: center
});

const getCenter = centerId => (dispatch) => {
  axios
    .get(`/centers/${centerId}`)
    .then((res) => {
      dispatch(getCenterDetails(res.data.center));
    })
    .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default getCenter;
