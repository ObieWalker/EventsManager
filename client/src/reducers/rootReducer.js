import { combineReducers } from 'redux';

import register from './registerReducer';
import login from './loginReducer';
import createCenterReducer from './createCenterReducer';
import updateCenterReducer from './updateCenterReducer';
import allCentersReducer from './allCentersReducer';
import userEventsReducer from './userEventsReducer';
import deleteCenterReducer from './deleteCenterReducer';
import allEventsReducer from './allEventsReducer';
import userHistoryReducer from './userHistoryReducer';
import getCenterReducer from './getACenterReducer';
import centerEventsReducer from './centerEventsReducer';
import editEventReducer from './editEventReducer';
import getUsersReducer from './getUsersReducer';

const rootReducer = combineReducers({
  registerUser: register,
  loginUser: login,
  createCenter: createCenterReducer,
  updateCenter: updateCenterReducer,
  allCenters: allCentersReducer,
  deleteCenter: deleteCenterReducer,
  allEvents: allEventsReducer,
  allUserEvents: userEventsReducer,
  userHistory: userHistoryReducer,
  getCenter: getCenterReducer,
  centerEvents: centerEventsReducer,
  updateEvent: editEventReducer,
  getUsers: getUsersReducer
});

export default rootReducer;
