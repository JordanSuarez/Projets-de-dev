import { combineReducers } from 'redux';
import authReducer from './auth';
import profileReducer from './userProfile';
import projectReducer from './project';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  userProfile: profileReducer,
});

export default rootReducer;
