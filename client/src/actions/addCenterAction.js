import axios from 'axios';

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

const addCenter = (center, imageUrl) => (
  (dispatch) => {
    if (axios.defaults.headers.common['x-access-token'] === '') {
      axios.defaults.headers.common['x-access-token'] = window.localStorage.jwtToken;
    }
    return axios({
      method: 'POST',
      url: '/api/v1/centers',
      headers: {
        'x-access-token': window.localStorage.jwtToken
      },
      centerInfo: {
        name: center.name,
        address: center.address,
        facility: center.facility,
        capacity: center.capacity,
        city: center.city,
        isAvailable: center.isAvailable,
        image: imageUrl
      }
    }).then((response) => {
      const { message } = response.centerInfo;
      dispatch(createCenterSuccess(response.centerInfo.center, message));
      dispatch(isCenterCreating(false));
    }).catch((error) => {
      dispatch(createCenterFailure(error.response.centerInfo.message));
      dispatch(isCenterCreating(false));
    });
  }
);

const createCenterRequest = center => (
  (dispatch) => {
    let imageUrl = process.env.DEFAULT_IMAGE;

    dispatch(isCenterCreating(true));
    if (center.imageFile.name) {
      delete axios.defaults.headers.common['x-access-token'];
      const imageData = new FormData();
      imageData.append('file', center.imageFile);
      imageData.append('upload_preset', process.env.UPLOAD_PRESET);

      return axios.post(process.env.CLOUDINARY_URL, imageData)
        .then((response) => {
          imageUrl = response.data.url;
          return dispatch(addCenter(center, imageUrl));
        }).catch(() => {
          dispatch(createCenterFailure('Your upload failed, Please try again.'));
          dispatch(isCenterCreating(false));
        });
    }
    return dispatch(addCenter(center, imageUrl));
  }
);
export default createCenterRequest;
