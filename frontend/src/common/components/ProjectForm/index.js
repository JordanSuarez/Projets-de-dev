import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { fetchProjectTags } from 'src/common/redux/actions/project';
import ProjectForm from './ProjectForm';
import styles from './styles';

const mapStateToProps = (state) => ({
  tags: state.project.tags,
});

const mapsDispatchToProps = (dispatch) => ({
  fetchTags: () => (
    dispatch(fetchProjectTags())
  ),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(ProjectForm);
