import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { submitRegister } from 'src/common/redux/actions/auth';
import Register from './Register';
import styles from './styles';

const mapDispatchToProps = (dispatch) => ({
  handleRegister: ({ email, password, username }) => {
    dispatch(submitRegister(email, password, username));
  },
});

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  isLogged: state.auth.isLogged,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Register);
