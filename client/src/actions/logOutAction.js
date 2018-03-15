import { loginUserAsync } from '../actions/loginUserAction';
import { setAuthToken } from '../../helpers/setAuthToken';

/**
 * @description handles user logout user request
 *
 * @returns { undefined }
 */
const logOut = () => (
  (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(loginUserAsync({}));
  }
);

export default logOut;
