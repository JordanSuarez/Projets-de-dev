import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { setSidebar } from 'src/common/redux/actions/chat';

import Chat from './Chat';
import styles from './styles';

const mapStateToProps = (state) => ({
  status: state.chat.status,
  
});

const mapsDispatchToProps = (dispatch) => ({
  setStatus: (status) => {
    dispatch(setSidebar(status));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Chat);
