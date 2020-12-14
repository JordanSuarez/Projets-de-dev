export const SET_SIDEBAR = 'SET_SIDEBART';
export const GET_CHANNEL_LIST = 'GET_CHANNEL_LIST';
export const SET_CHANNEL = 'SET_CHANNEL';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const EMIT_MESSAGE = 'EMIT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SAVE_CHANNELS = 'SAVE_CHANNELS';

// Gestion sidebar open/close
export const setSidebar = (status) => ({
  type: SET_SIDEBAR,
  status,
});

// Recuperation de tout les channels
export const getChannelList = (channelList) => ({
  type: GET_CHANNEL_LIST,
  channelList,
});

// Choix du channel a afficher dans le composant messages
export const setChannel = (channel) => ({
  type: SET_CHANNEL,
  channel,
});

export const saveChannels = (channels) => ({
  type: SAVE_CHANNELS,
  channels,
});

export const connectWebSocket = (channelId) => ({
  type: CONNECT_WEBSOCKET,
  channelId,
});

export const emitMessage = (message, channelId) => ({
  type: EMIT_MESSAGE,
  message,
  channelId,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});
