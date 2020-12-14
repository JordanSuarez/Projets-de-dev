export const SET_SIDEBAR = 'SET_SIDEBART';
export const SET_CHANNEL = 'SET_CHANNEL';

// Gestion sidebar open/close
export const setSidebar = (status) => ({
  type: SET_SIDEBAR,
  status,
});

// Choix du channel a afficher dans le composant messages
export const setChannel = (channelId) => ({
  type: SET_CHANNEL,
  channelId,
});
