import React, { useEffect, useState } from 'react';

import { withStyles } from '@material-ui/core';
import 'src/common/styles/index.scss';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from 'src/common/routing/router';
import { routes } from 'src/common/routing/routes';
import store from 'src/common/redux/store';
import theme from 'src/common/styles';
import Snackbar from 'src/common/components/Snackbar';
import IconButton from 'src/common/components/IconButton';
import ScrollButton from '@material-ui/icons/ExpandLessRounded';
import { classes as classesProps } from 'src/common/classes';
import styles from './styles';

const App = ({ classes }) => {
  const [atTheTopOfThePage, setAtTheTopOfThePage] = useState(true);

  // Display scrollButton when scroll event is trigger
  const handleScroll = () => (
    window.pageYOffset > 200
      ? setAtTheTopOfThePage(false)
      : setAtTheTopOfThePage(true));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Snackbar />
        <Router routes={routes} />
        {!atTheTopOfThePage
        && (
        <IconButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={classes.scrollTop}>
          <ScrollButton />
        </IconButton>
        )}
      </Provider>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  ...classesProps,
};

export default withStyles(styles)(App);
