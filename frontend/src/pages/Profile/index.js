import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getProfileInfos } from 'src/common/redux/actions/profile';
import { getProfileLikes } from 'src/common/redux/actions/userProfile';

import Profile from './Profile';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  profile: state.profile.profile,
  loading: state.profile.loading,
  isLogged: state.auth.isLogged,
  myLikes: state.userProfile.myLikes,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: (id) => {
    dispatch(getProfileInfos(id));
  },
  getMyLikes: () => {
    dispatch(getProfileLikes());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
