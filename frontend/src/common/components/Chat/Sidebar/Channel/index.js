import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { setChannel, connectWebSocket, getChannelList } from 'src/common/redux/actions/chat';

import Channel from './Channel';
import styles from './styles';

const mapStateToProps = (state) => ({
  channels: state.chat.channels,
});

const mapsDispatchToProps = (dispatch) => ({
  setChoiceChannel: (id) => {
    dispatch(setChannel(id));
  },
  getChannels: () => {
    dispatch(getChannelList());
  },
  connectWebSocket: (id) => {
    dispatch(connectWebSocket(id));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Channel);
