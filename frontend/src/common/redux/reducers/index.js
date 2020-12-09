import { combineReducers } from 'redux';
import authReducer from './auth';
import homeReducer from './home';
import userProfileReducer from './userProfile';
import projectReducer from './project';
import projectsReducer from './projects';
import profileReducer from './profile';
import profilesReducer from './profiles';
import snackbarReducer from './snackbar';

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  home: homeReducer,
  auth: authReducer,
  project: projectReducer,
  projects: projectsReducer,
  userProfile: userProfileReducer,
  profile: profileReducer,
  profiles: profilesReducer,
});

export default rootReducer;
