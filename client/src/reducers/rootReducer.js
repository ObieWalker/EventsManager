import { combineReducers } from 'redux';

import register from './registerReducer';
import login from './loginReducer';
// import events from './eventReducer';
// import centerReducer from './centerReducer';
// import singleCenter from './singleCenterReducer'
import createCenterReducer from './createCenterReducer';
import allCentersReducer from './allCentersReducer';
import userEventsReducer from './userEventsReducer';
import editCenterReducer from './editCenterReducer';
import deleteCenterReducer from './deleteCenterReducer';

const rootReducer = combineReducers({
  registerUser: register,
  loginUser: login,
  createCenter: createCenterReducer,
  allCenters: allCentersReducer,
  userEvents: userEventsReducer,
  deleteCenter: deleteCenterReducer,
  editCenter: editCenterReducer,
});

export default rootReducer;
