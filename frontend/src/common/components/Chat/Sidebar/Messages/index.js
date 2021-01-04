import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { emitMessage } from 'src/common/redux/actions/chat';
import Messages from './Messages';
import styles from './styles';

const mapStateToProps = (state) => ({
  channel: state.chat.channel,
  messages: state.chat.messages,
  currentUserId: state.auth.userId,
  currentUser: {
    username: state.userProfile.userProfile.username,
    userImage: state.userProfile.userProfile.userImage,
  },
  loading: state.chat.loading,
});

const mapsDispatchToProps = (dispatch) => ({
  sendMessage: (message, username, userImage) => {
    dispatch(emitMessage(message, username, userImage));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Messages);
