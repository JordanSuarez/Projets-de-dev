export const TOKEN = 'token';
export const USER = 'user';
export const USER_ID = 'userId';

export const removeToken = () => localStorage.removeItem(TOKEN);
export const removeUser = () => localStorage.removeItem(USER);
export const removeUserId = () => localStorage.removeItem(USER_ID);

export const getToken = () => localStorage.getItem(TOKEN);
export const getUser = () => JSON.parse(localStorage.getItem(USER));
export const getUserId = () => localStorage.getItem(USER_ID);

export const setToken = (userToken) => localStorage.setItem(TOKEN, userToken);
export const setUser = (user) => localStorage.setItem(USER, JSON.stringify(user));
export const setUserId = (userId) => localStorage.setItem(USER_ID, userId);

// return true if there is a token in cookies
export const isAuthenticated = () => getToken();
