import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProjectForm from './ProjectForm';
import styles from './styles';

const mapStateToProps = (state) => ({
  tags: state.project.tags,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
  ),
)(ProjectForm);
