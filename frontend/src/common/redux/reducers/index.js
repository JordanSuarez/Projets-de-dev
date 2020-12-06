import { combineReducers } from 'redux';
import authReducer from './auth';
import profileReducer from './profile';
import projectReducer from './project';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  profile: profileReducer,
});

export default rootReducer;
