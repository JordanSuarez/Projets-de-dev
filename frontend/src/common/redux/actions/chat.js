export const SET_SIDEBAR = 'SET_SIDEBART';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const EMIT_MESSAGE = 'EMIT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// Gestion sidebar open/close
export const setSidebar = (status) => ({
  type: SET_SIDEBAR,
  status,
});

export const connectWebSocket = () => ({
  type: CONNECT_WEBSOCKET,
});

export const emitMessage = (message) => ({
  type: EMIT_MESSAGE,
  message,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});
