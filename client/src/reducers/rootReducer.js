import { combineReducers } from 'redux';

import register from './registerReducer'
import login from './loginReducer'
import events from './eventReducer'
import center from './centerReducer'
// import singleCenter from './singleCenterReducer'

const rootReducer = combineReducers({
    registerUser: register,
    loginUser: login,
    event: events,
    center: center
});

export default rootReducer;
