import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { submitLogin } from 'src/common/redux/actions/auth';
import Login from './Login';
import styles from './styles';

const mapDispatchToProps = (dispatch) => ({
  handleLogin: ({ email, password }) => {
    dispatch(submitLogin(email, password));
  },
});

const mapStateToProps = (state) => ({
  redirect: state.auth.redirect,
  initialValues: {
    email: state.auth.userEmail,
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login);
