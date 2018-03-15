import { combineReducers } from 'redux';

import register from './registerReducer';
import login from './loginReducer';
import events from './eventReducer';
import centerReducer from './centerReducer';
// import singleCenter from './singleCenterReducer'

const rootReducer = combineReducers({
  registerUser: register,
  loginUser: login,
  event: events,
  center: centerReducer
});

export default rootReducer;
