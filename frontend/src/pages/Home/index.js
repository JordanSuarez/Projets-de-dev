import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Home from './Home';
import styles from './styles';

const mapStateToProps = (state) => ({
  loading: state.home.loading,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
  ),
)(Home);
