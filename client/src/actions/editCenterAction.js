import axios from 'axios'

import { EDIT_A_CENTER} from './actionTypes'

const editCenterAsync = (changeState, centerId) => ({
    type: EDIT_A_CENTER,
    payload: {
        changeState,
        centerId,
    },
})

const editCenter = (changeState, centerId) => (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios
        .put(`/centers/${centerId}`, changeState)
        .then((res) => {
            localStorage.setItem('message', res.data.message);
            dispatch(editCenterAsync(changeState, centerId));
        })
        .catch(error => localStorage.setItem('message', error.response.data.message));
};
export default editCenter;