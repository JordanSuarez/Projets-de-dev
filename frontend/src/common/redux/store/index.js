import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/common/redux/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
