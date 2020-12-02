import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/common/redux/reducers';
import auth from 'src/common/redux/middlewares/auth';

const enhancers = composeWithDevTools(
  applyMiddleware(
    auth,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
