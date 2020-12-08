/* eslint-disable import/no-unresolved */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/common/redux/reducers';
import auth from 'src/common/redux/middlewares/auth';
import home from 'src/common/redux/middlewares/home';
import userProfile from 'src/common/redux/middlewares/userProfile';
import profile from 'src/common/redux/middlewares/profile';
import profiles from 'src/common/redux/middlewares/profiles';
import project from 'src/common/redux/middlewares/project';
import projects from 'src/common/redux/middlewares/projects';

const enhancers = composeWithDevTools(
  applyMiddleware(
    home,
    auth,
    userProfile,
    profile,
    profiles,
    project,
    projects,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
