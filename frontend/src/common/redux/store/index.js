import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/common/redux/reducers';
import auth from 'src/common/redux/middlewares/auth';
import profile from 'src/common/redux/middlewares/profile';

const enhancers = composeWithDevTools(
  applyMiddleware(
    auth,
    profile,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
