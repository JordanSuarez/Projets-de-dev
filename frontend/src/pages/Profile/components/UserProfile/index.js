import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import {
  getProfileInfos, handleDeleteUserProfile, getProfileProjectsLikes,
} from 'src/common/redux/actions/userProfile';
import { handleDeleteProject, clearProjectPageState } from 'src/common/redux/actions/project';
import { clearProjectsState } from 'src/common/redux/actions/projects';
import { clearHomeState } from 'src/common/redux/actions/home';
import { clearProfileState } from 'src/common/redux/actions/profile';
import UserProfile from './UserProfile';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  userProfile: state.userProfile.userProfile,
  myProjectsLiked: state.userProfile.myProjectsLiked,
  loading: state.userProfile.loading,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(getProfileInfos());
  },
  handleDeleteProject: (projectId) => {
    dispatch(handleDeleteProject(projectId));
  },
  handleDeleteUserProfile: () => {
    dispatch(handleDeleteUserProfile());
  },
  getMyProjectsLiked: () => {
    dispatch(getProfileProjectsLikes());
  },
  clearState: () => {
    dispatch(clearHomeState());
    dispatch(clearProjectsState());
    dispatch(clearProfileState());
    dispatch(clearProjectPageState());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UserProfile);
