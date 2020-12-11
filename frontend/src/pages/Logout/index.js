import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { submitLogoutSuccess } from 'src/common/redux/actions/auth';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import { removeToken } from 'src/common/authentication/authProvider';
import Logout from './Logout';
import styles from './styles';

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    removeToken();
    dispatch(submitLogoutSuccess());
    dispatch(showSnackbar('', 'A bientôt!', 'info'));
  },
});

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps,
  ),
)(Logout);
