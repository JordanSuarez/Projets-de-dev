import { combineReducers } from 'redux';
import authReducer from './auth';
import homeReducer from './home';
import userProfileReducer from './userProfile';
import projectReducer from './project';
import projectsReducer from './projects';
import commentsReducer from './comments';
import profileReducer from './profile';
import profilesReducer from './profiles';
import snackbarReducer from './snackbar';
import redirectionReducer from './redirection';

const rootReducer = combineReducers({
  redirection: redirectionReducer,
  snackbar: snackbarReducer,
  home: homeReducer,
  auth: authReducer,
  project: projectReducer,
  projects: projectsReducer,
  comments: commentsReducer,
  userProfile: userProfileReducer,
  profile: profileReducer,
  profiles: profilesReducer,
});

export default rootReducer;
