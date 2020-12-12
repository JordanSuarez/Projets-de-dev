import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getProfileInfos, handleDeleteUserProfile } from 'src/common/redux/actions/userProfile';
import { handleDeleteProject } from 'src/common/redux/actions/project';
import UserProfile from './UserProfile';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  userProfile: state.userProfile.userProfile,
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
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UserProfile);
