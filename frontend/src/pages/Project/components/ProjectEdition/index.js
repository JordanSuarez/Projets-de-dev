import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { handleEditProject } from 'src/common/redux/actions/project';
import ProjectEdition from './ProjectEdition';
import styles from './styles';

const mapStateToProps = (state) => ({
  project: state.project.project,
});

const mapsDispatchToProps = (dispatch) => ({
  handleEditProject: (formProjectValues, projectId) => (
    dispatch(handleEditProject(formProjectValues, projectId))
  ),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(ProjectEdition);
