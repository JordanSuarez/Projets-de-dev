import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getProfileInfos, updateProfile } from 'src/common/redux/actions/userProfile';

import ProfileEdition from './ProfileEdition';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  userProfile: state.userProfile.userProfile,
  loading: state.userProfile.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(getProfileInfos());
  },
  handleUpdate: (event) => {
    dispatch(updateProfile(event));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ProfileEdition);
