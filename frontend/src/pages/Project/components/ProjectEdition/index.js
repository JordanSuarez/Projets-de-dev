import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProjectEdition from './ProjectEdition';
import styles from './styles';

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
  ),
)(ProjectEdition);
