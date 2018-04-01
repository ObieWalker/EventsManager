import { combineReducers } from 'redux';

import register from './registerReducer';
import login from './loginReducer';
// import events from './eventReducer';
// import centerReducer from './centerReducer';
// import singleCenter from './singleCenterReducer'
import createCenterReducer from './createCenterReducer';
import updateCenterReducer from './updateCenterReducer';
import allCentersReducer from './allCentersReducer';
import userEventsReducer from './userEventsReducer';
import editCenterReducer from './editCenterReducer';
import deleteCenterReducer from './deleteCenterReducer';
import allEventsReducer from './allEventsReducer';

const rootReducer = combineReducers({
  registerUser: register,
  loginUser: login,
  createCenter: createCenterReducer,
  updateCenter: updateCenterReducer,
  allCenters: allCentersReducer,
  allEvents: allEventsReducer,
  userEvents: userEventsReducer,
  deleteCenter: deleteCenterReducer,
  editCenter: editCenterReducer,
});

export default rootReducer;
