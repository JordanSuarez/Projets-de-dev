export const TOKEN = 'token';

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const setToken = (userToken) => localStorage.setItem(TOKEN, userToken);

// return true if there is a token in cookies
export const isAuthenticated = () => getToken();
