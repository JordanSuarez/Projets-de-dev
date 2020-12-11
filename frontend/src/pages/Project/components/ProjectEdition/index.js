import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { handleEditProject, fetchProjectById } from 'src/common/redux/actions/project';
import ProjectEdition from './ProjectEdition';
import styles from './styles';

const mapStateToProps = (state) => ({
  project: state.project.project,
  loading: state.project.loading,
  redirect: state.redirection.redirect,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchProjectById: (projectId) => {
    dispatch(fetchProjectById(projectId));
  },
  handleEditProject: (formProjectValues) => {
    dispatch(handleEditProject(formProjectValues));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(ProjectEdition);
