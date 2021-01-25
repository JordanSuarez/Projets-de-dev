import React from 'react';

import { withStyles } from '@material-ui/core';
import 'src/common/styles/index.scss';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from 'src/common/routing/router';
import { routes } from 'src/common/routing/routes';
import store from 'src/common/redux/store';
import theme from 'src/common/styles';
import Snackbar from 'src/common/components/Snackbar';
import Chat from 'src/common/components/Chat';
import styles from './styles';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Snackbar />
      <Router routes={routes} />
      {/*
          The chat is loaded at the launch of the
          site for possible modifications (notifications ...).
        */}
      <Chat />
    </Provider>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
