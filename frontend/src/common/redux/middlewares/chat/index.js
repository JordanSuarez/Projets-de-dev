import {
  CONNECT_WEBSOCKET, EMIT_MESSAGE, addMessage,
} from 'src/common/redux/actions/chat';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getToken } from 'src/common/authentication/authProvider';
import io from 'socket.io-client';
import {GET, ALL} from 'src/common/callApiHandler/constants';

let socket;

const chatMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET:
      socket = io('http://localhost:3001');
        socket.on('connection', () => {
          // store.dispatch(addMessage());
          // socket.emit('channel', action.channelId);
        });
      socket.on('send_message', (message) => {
          console.log(message);
        store.dispatch(addMessage(message));
      });
      break;
    case EMIT_MESSAGE: {
      console.log(action.message)
      socket.emit('send_message', { message: action.message, userToken: getToken() });
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleWare;
