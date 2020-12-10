import { combineReducers } from 'redux';
import authReducer from './auth';
import homeReducer from './home';
import userProfileReducer from './userProfile';
import projectReducer from './project';
import projectsReducer from './projects';
import commentsReducer from './comments';
import profileReducer from './profile';
import profilesReducer from './profiles';

const rootReducer = combineReducers({
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
