import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import {
  getProfileInfos, handleDeleteUserProfile, getProfileLikes, getProjects,
} from 'src/common/redux/actions/userProfile';
import { handleDeleteProject } from 'src/common/redux/actions/project';
import { clearProjectsState } from 'src/common/redux/actions/projects';
import { clearHomeState } from 'src/common/redux/actions/home';
import UserProfile from './UserProfile';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  userProfile: state.userProfile.userProfile,
  myLikes: state.userProfile.myLikes,
  loading: state.userProfile.loading,
  isLogged: state.auth.isLogged,
  projects: state.userProfile.projects,
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
  getMyLikes: () => {
    dispatch(getProfileLikes());
  },
  getProjects: () => {
    dispatch(getProjects());
  },
  clearState: () => {
    dispatch(clearHomeState());
    dispatch(clearProjectsState());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UserProfile);
