import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/common/redux/reducers';
import auth from 'src/common/redux/middlewares/auth';

import profile from 'src/common/redux/middlewares/profile';
import project from 'src/common/redux/middlewares/project';


const enhancers = composeWithDevTools(
  applyMiddleware(
    auth,
    profile,
    project,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
