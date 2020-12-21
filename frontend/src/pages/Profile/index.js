import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getProfileInfos } from 'src/common/redux/actions/profile';
import { getProfileLikes, clearUserProfileState } from 'src/common/redux/actions/userProfile';
import { clearProjectPageState } from 'src/common/redux/actions/project';
import { clearProjectsState } from 'src/common/redux/actions/projects';
import { clearHomeState } from 'src/common/redux/actions/home';

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
  clearState: () => {
    dispatch(clearHomeState());
    dispatch(clearProjectsState());
    dispatch(clearUserProfileState());
    dispatch(clearProjectPageState());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
