import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import { hideSnackbar } from 'src/common/redux/actions/snackbar';
import styles from './styles';
import Snackbar from './component';

const mapStateToProps = (state) => ({
  isOpen: state.snackbar.isOpen,
  content: state.snackbar.content,
  title: state.snackbar.title,
  severity: state.snackbar.severity,
});

const mapsDispatchToProps = (dispatch) => ({
  hideSnackbar: () => {
    dispatch(hideSnackbar());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Snackbar);
