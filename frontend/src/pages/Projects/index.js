/* eslint-disable import/no-unresolved */
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getProjectsInfos } from 'src/common/redux/actions/projects';

import Projects from './Projects';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  projects: state.projects.projects,
  projectsNumber: state.projects.projectsNumber,
  loading: state.projects.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: (projectLimit, projectOffset) => {
    dispatch(getProjectsInfos(projectLimit, projectOffset));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Projects);
