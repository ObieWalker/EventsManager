import axios from 'axios';
import swal from 'sweetalert';

import {
  IS_CENTER_CREATING,
  CREATE_CENTER_SUCCESS,
  CREATE_CENTER_FAILURE
} from './actionTypes';

const isCenterCreating = bool => ({
  type: IS_CENTER_CREATING,
  bool
});

const createCenterSuccess = (center, message) => ({
  type: CREATE_CENTER_SUCCESS,
  center,
  message
});

const createCenterFailure = error => ({
  type: CREATE_CENTER_FAILURE,
  error
});
// imageUrl
const addCenter = centerDetails => (dispatch) => {
  if (axios.defaults.headers.common.token === '') {
    axios.defaults.headers.common.token = localStorage.getItem('token');
  }
  return axios({
    method: 'POST',
    url: '/api/v1/centers',
    headers: {
      token: localStorage.getItem('token')
    },
    data: centerDetails
  })
    .then((response) => {
      const { message } = response.data;
      dispatch(createCenterSuccess(response.data.center, message));
      dispatch(isCenterCreating(false));
    })
    .catch((error) => {
      swal({
        title: 'Unable to add center',
        text: error.response.data.message,
        icon: 'error',
        dangerMode: false,
      });
      dispatch(createCenterFailure(error.response.data.message));
      dispatch(isCenterCreating(false));
    });
};

const createCenterRequest = center => (dispatch) => {
  // let imageUrl = process.env.DEFAULT_IMAGE;

  dispatch(isCenterCreating(true));
  // if (center.imageFile.name) {
  //   delete axios.defaults.headers.common['x-access-token'];
  //   const imageData = new FormData();
  //   imageData.append('file', center.imageFile);
  //   imageData.append('upload_preset', process.env.UPLOAD_PRESET);

  //   return axios.post(process.env.CLOUDINARY_URL, imageData)
  //     .then((response) => {
  //       imageUrl = response.data.url;
  //       return dispatch(addCenter(center, imageUrl));
  //     }).catch(() => {
  //       dispatch(
  // createCenterFailure('Your upload failed, Please try again.'));
  //       dispatch(isCenterCreating(false));
  //     });
  // }
  return dispatch(addCenter(center));
  // imageUrl));
};
export default createCenterRequest;
