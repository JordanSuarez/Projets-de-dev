import {
  GET_CHANNEL_LIST, CONNECT_WEBSOCKET, EMIT_MESSAGE, addMessage, saveChannels,
} from 'src/common/redux/actions/chat';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getToken } from 'src/common/authentication/authProvider';
import io from 'socket.io-client';
import {
  CHANNELS,
  GET,
  ALL,
} from 'src/common/callApiHandler/constants';

let socket;

const chatMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CHANNEL_LIST: {
      const url = getEndpoint(CHANNELS, GET, ALL);
      callApi(url, GET)
        .then(({ data }) => {
          store.dispatch(saveChannels(data));
        })
        .catch((response) => {
          console.log(response);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case CONNECT_WEBSOCKET:
      socket = io('http://localhost:3001');
      //   socket.on('connection', () => {
      //     // store.dispatch(addMessage());
      //   });
      socket.on('send_message', (message) => {
          console.log(message)
        store.dispatch(addMessage(message));
      });
      break;
    case EMIT_MESSAGE: {
      socket.emit('send_message', { message: action.message, userToken: getToken(), channelId: action.channelId });
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleWare;
