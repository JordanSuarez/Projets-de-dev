export const TOKEN = 'token';
export const USER_ID = 'userId';

export const removeToken = () => localStorage.removeItem(TOKEN);
export const removeUserId = () => localStorage.removeItem(USER_ID);

export const getToken = () => localStorage.getItem(TOKEN);
export const getUserId = () => localStorage.getItem(USER_ID);

export const setToken = (userToken) => localStorage.setItem(TOKEN, userToken);
export const setUserId = (userId) => localStorage.setItem(USER_ID, userId);

// return true if there is a token in cookies
export const isAuthenticated = () => getToken();
