import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import About from './About';
import styles from './styles';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
  ),
)(About);
