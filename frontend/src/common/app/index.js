import React from 'react';
import 'src/common/styles/index.scss';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from 'src/common/routing/router';
import { routes } from 'src/common/routing/routes';
import store from 'src/common/redux/store';
import theme from 'src/common/styles';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
    <Router routes={routes} />
    </Provider>
  </MuiThemeProvider>
);

export default App;
