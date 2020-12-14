import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { userAuthVerify, submitLogoutSuccess } from 'src/common/redux/actions/auth';
import Navigation from './Navigation';
import styles from './styles';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  userAuthVerify: (token) => {
    dispatch(userAuthVerify(token));
  },
  isNotLogged: () => {
    dispatch(submitLogoutSuccess());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Navigation);
