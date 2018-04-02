import axios from 'axios';
import {
  IS_CENTER_UPDATING,
  UPDATE_CENTER_SUCCESS,
  UPDATE_CENTER_FAILURE
} from './actionTypes';

const isCenterUpdating = bool => ({
  type: IS_CENTER_UPDATING,
  bool
});

const updateCenterSuccess = (updatedCenter, message) => ({
  type: UPDATE_CENTER_SUCCESS,
  updatedCenter,
  message
});

const updateCenterFailure = error => ({
  type: UPDATE_CENTER_FAILURE,
  error
});

const updateCenter = (newCenterDetails, id) => (
  (dispatch) => {
    if (axios.defaults.headers.common.token === '') {
      axios.defaults.headers.common.token = localStorage.getItem('jwtToken');
    }

    return axios({
      method: 'PUT',
      url: `/api/v1/centers/${id}`,
      headers: {
        token: localStorage.getItem('jwtToken')
      },
      data: newCenterDetails
    }).then((response) => {
      if (response) {
        const { message } = response.data;
        dispatch(updateCenterSuccess(response.data.center, message));
        dispatch(isCenterUpdating(false));
      }
    }).catch(() => {
      dispatch(updateCenterFailure('Unable to update your center. Try again later'));
      dispatch(isCenterUpdating(false));
    });
  }
);

const updateCenterRequest = (newCenterDetails, centerId) => (
  (dispatch) => {
    // let cloudImageUrl = center.initialImageSrc;
    dispatch(isCenterUpdating(true));

    // if (center.imageFile.name) {
    //   delete axios.defaults.headers.common['x-access-token'];
    //   const imageData = new FormData();
    //   imageData.append('file', center.imageFile);
    //   imageData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

    //   return axios.post(process.env.CLOUDINARY_URL, imageData)
    //     .then((response) => {
    //       cloudImageUrl = response.data.url;
    //       return dispatch(updateCenter(center, cloudImageUrl));
    //     }).catch(() => {
    //       dispatch(isCenterUpdating(false));
    //       dispatch(updateCenterFailure('Unable to upload your center. Try again later'));
    //     });
    // }
    return dispatch(updateCenter(newCenterDetails, centerId));
  }
);

export default updateCenterRequest;
