import { combineReducers } from 'redux';

import register from './registerReducer'
import login from './loginReducer'
import events from './eventReducer'
import allCenters from './allCentersReducer'
import singleCenter from './singleCenterReducer'

const rootReducer = combineReducers({
    registerUser: register,
    loginUser: login,
    event: events,
    center: singleCenter,
    centers: allCenters
});

export default rootReducer;
