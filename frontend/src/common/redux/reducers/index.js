import { combineReducers } from 'redux';
import authReducer from './auth';
import profileEditReducer from './profileEdit';
import projectReducer from './project';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  profileEdit: profileEditReducer,
});

export default rootReducer;
