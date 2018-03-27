import toastr from 'toastr';
import { setAuthToken } from '../../helpers/setAuthToken';

import { SET_CURRENT_USER } from './actionTypes';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
/**
* @description handles user logout user request
*
* @returns { undefined }
*/
const logOut = () =>
  (dispatch) => {
    localStorage.removeItem('token');
    setAuthToken(false);
    toastr.success('You have been logged out!!');
    return dispatch(setCurrentUser({}));
  };

export default logOut;
