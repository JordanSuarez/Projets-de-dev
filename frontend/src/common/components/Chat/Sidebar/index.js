import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import styles from './styles';

const mapStateToProps = (state) => ({

});

const mapsDispatchToProps = (dispatch) => ({

});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Sidebar);
