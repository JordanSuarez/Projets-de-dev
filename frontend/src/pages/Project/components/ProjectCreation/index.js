import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { handleCreateProject } from 'src/common/redux/actions/project';
import ProjectCreation from './ProjectCreation';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
});

const mapsDispatchToProps = (dispatch) => ({
  handleCreateProject: (formProjectValues) => (
    dispatch(handleCreateProject(formProjectValues))
  ),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(ProjectCreation);
