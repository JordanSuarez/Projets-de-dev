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

// sauvegarde des messages recu par socket.io dans le state redux
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

// recupeation des messages en DB a l'ouverture du chat
export const getMessages = () => ({
  type: GET_MESSAGES,
});

// sauvegarde des messages
export const saveMessages = (messages) => ({
  type: SAVE_MESSAGES,
  messages,
});

// sauvegarde du profil choisi a afficher depuis le chat
export const saveUserSelected = (profile) => ({
  type: SAVE_USER_SELECTED,
  profile,
});

// ---------------- Socket.io -----------------------
// connection socket.io au chargement de la page
export const connectWebSocket = () => ({
  type: CONNECT_WEBSOCKET,
});

// envoi message
export const emitMessage = (message, username, userImage) => ({
  type: EMIT_MESSAGE,
  message,
  username,
  userImage,
});
