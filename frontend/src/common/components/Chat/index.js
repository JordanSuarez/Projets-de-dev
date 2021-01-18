import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { setChat, connectWebSocket, getMessages } from 'src/common/redux/actions/chat';
import Chat from './Chat';
import styles from './styles';

const mapStateToProps = (state) => ({
  status: state.chat.status,
  isLogged: state.auth.isLogged,
  profileSelected: state.chat.profileSelected,
});

const mapsDispatchToProps = (dispatch) => ({
  setStatus: (status) => {
    dispatch(setChat(status));
  },
  connectWebSocket: () => {
    dispatch(connectWebSocket());
  },
  getMessageList: () => {
    dispatch(getMessages());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Chat);
