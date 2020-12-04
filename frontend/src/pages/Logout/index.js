import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { submitLogout } from 'src/common/redux/actions/auth';
import Logout from './Logout';
import styles from './styles';

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(submitLogout());
  },
});

const mapStateToProps = (state) => ({
  redirect: state.auth.redirect,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Logout);
