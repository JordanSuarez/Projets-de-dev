import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getProjectsInfos } from 'src/common/redux/actions/projects';
import { getProfileLikes } from 'src/common/redux/actions/userProfile';
import { clearHomeState } from 'src/common/redux/actions/home';

import Projects from './Projects';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  projectsCurrentPage: state.projects.projectsCurrentPage,
  allProjects: state.projects.allProjects,
  projectsNumber: state.projects.projectsNumber,
  loading: state.projects.loading,
  isLogged: state.auth.isLogged,
  myLikes: state.userProfile.myLikes,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: (projectLimit, projectOffset) => {
    dispatch(getProjectsInfos(projectLimit, projectOffset));
  },
  getMyLikes: () => {
    dispatch(getProfileLikes());
  },
  clearHomeState: () => {
    dispatch(clearHomeState());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Projects);
