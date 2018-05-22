import { combineReducers } from 'redux';

import register from './registerReducer';
import login from './loginReducer';
// import events from './eventReducer';
import createCenterReducer from './createCenterReducer';
import updateCenterReducer from './updateCenterReducer';
import allCentersReducer from './allCentersReducer';
import userEventsReducer from './userEventsReducer';
import editCenterReducer from './editCenterReducer';
import deleteCenterReducer from './deleteCenterReducer';
import allEventsReducer from './allEventsReducer';
import userHistoryReducer from './userHistoryReducer';
import getCenterReducer from './getACenterReducer';
import centerEventsReducer from './centerEventsReducer';

const rootReducer = combineReducers({
  registerUser: register,
  loginUser: login,
  createCenter: createCenterReducer,
  updateCenter: updateCenterReducer,
  allCenters: allCentersReducer,
  deleteCenter: deleteCenterReducer,
  allEvents: allEventsReducer,
  allUserEvents: userEventsReducer,
  editCenter: editCenterReducer,
  userHistory: userHistoryReducer,
  getCenter: getCenterReducer,
  centerEvents: centerEventsReducer
});

export default rootReducer;
