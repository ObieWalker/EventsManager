import axios from 'axios';

import { GET_ALL_CENTERS } from './actionTypes';

const getAllCentersAsync = centers => ({
  type: GET_ALL_CENTERS,
  payload: centers
});

const getAllCenters = () => (dispatch) => {
  axios.defaults.headers.common.Authorization =
  `Bearer ${localStorage.getItem('token')}`;
  axios
    .get('/api/v1/centers')
    .then((res) => {
      localStorage.setItem('message', res.data.message);
      dispatch(getAllCentersAsync(res.data.centers));
    })
    .catch(error =>
      localStorage.setItem('message', error.response.data.message));
};
export default getAllCenters;