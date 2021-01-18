export const SET_CHAT = 'SET_CHAT';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const EMIT_MESSAGE = 'EMIT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const SAVE_USER_SELECTED = 'SAVE_USER_SELECTED';

// Gestion sidebar open/close
export const setChat = (status) => ({
  type: SET_CHAT,
  status,
});

// save messages received by socket.io in the redux state
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

// recovery of messages in DB when opening the chat
export const getMessages = () => ({
  type: GET_MESSAGES,
});

// save messages
export const saveMessages = (messages) => ({
  type: SAVE_MESSAGES,
  messages,
});

// saving the selected profile to display from the chat
export const saveUserSelected = (profile) => ({
  type: SAVE_USER_SELECTED,
  profile,
});

// ---------------- Socket.io -----------------------
// socket.io connection when the page loads
export const connectWebSocket = () => ({
  type: CONNECT_WEBSOCKET,
});

// send message
export const emitMessage = (message, username, userImage) => ({
  type: EMIT_MESSAGE,
  message,
  username,
  userImage,
});
