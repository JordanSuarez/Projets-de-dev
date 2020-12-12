import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { fetchProjectById } from 'src/common/redux/actions/project';
import Project from './Project';
import styles from './styles';

const mapStateToProps = (state) => ({
  project: state.project.project,
  loading: state.project.loading,
  redirect: state.redirection.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (id) => {
    dispatch(fetchProjectById(id));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Project);
