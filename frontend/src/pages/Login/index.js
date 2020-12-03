import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { submitLogin } from 'src/common/redux/actions/auth';
import Login from './Login';
 
import styles from './styles';

const mapDispatchToProps = (dispatch) => ({
  handleLogin: ({ email, password }) => {
    console.log(email, password);

    dispatch(submitLogin(email, password));
  },
});

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps,
  ),
)(Login);
