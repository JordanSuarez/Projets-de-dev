import { combineReducers } from 'redux';
import authReducer from './auth';
import userProfileReducer from './userProfile';
import projectReducer from './project';
import profileReducer from './profile';
import profilesReducer from './profiles';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  userProfile: userProfileReducer,
  profile: profileReducer,
  profiles: profilesReducer,
});

export default rootReducer;
