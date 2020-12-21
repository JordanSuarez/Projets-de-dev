import {
  CONNECT_WEBSOCKET, EMIT_MESSAGE, addMessage, GET_MESSAGES, saveMessages,
} from 'src/common/redux/actions/chat';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { getToken } from 'src/common/authentication/authProvider';
import { io } from 'socket.io-client';
import { GET, ALL, MESSAGES } from 'src/common/callApiHandler/constants';

let socket;

const chatMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      socket = io();
      socket.on('send_message', (message) => {
        store.dispatch(addMessage(message));
      });
      break;
    }
    case EMIT_MESSAGE: {
      socket.emit('send_message', {
        message: action.message,
        userToken: getToken(),
        username: action.username,
        userImage: action.userImage,
      });
      break;
    }
    case GET_MESSAGES: {
      const url = getEndpoint(MESSAGES, GET, ALL);

      callApi(url, GET)
        .then((response) => {
          store.dispatch(saveMessages(response.data));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleWare;
