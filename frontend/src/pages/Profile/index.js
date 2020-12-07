/* eslint-disable import/no-unresolved */
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getProfileInfos } from 'src/common/redux/actions/profile';

import Profile from './Profile';
// eslint-disable-next-line import/extensions
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.auth.redirect,
  userProfile: state.userProfile.userProfile,
  loading: state.userProfile.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(getProfileInfos());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
