import React from 'react';

import 'src/common/styles/index.scss';
import { Provider } from 'react-redux';
import Router from 'src/common/routing/router';
import { routes } from 'src/common/routing/routes';
import store from 'src/common/redux/store';

const App = () => (
  // <Provider store={store}>
    <Router routes={routes} />
  // </Provider>
);

export default App;
