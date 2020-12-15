import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { emitMessage } from 'src/common/redux/actions/chat';
import Messages from './Messages';
import styles from './styles';

const mapStateToProps = (state) => ({
  channel: state.chat.channel,
  messages: state.chat.channel.messages,
  currentUserId: state.auth.userId,
});

const mapsDispatchToProps = (dispatch) => ({
  sendMessage: (message) => {
    console.log(message)

    dispatch(emitMessage(message));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Messages);
