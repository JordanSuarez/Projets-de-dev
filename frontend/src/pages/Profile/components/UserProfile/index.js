import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { getProfileInfos, deleteProject } from 'src/common/redux/actions/userProfile';

import UserProfile from './UserProfile';
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
  handleDeleteProject: (projectId) => {
    dispatch(deleteProject(projectId));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UserProfile);
