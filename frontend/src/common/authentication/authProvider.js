import { Cookies } from 'js-cookie';

export const removeToken = () => Cookies.remove('token');

export const getToken = () => Cookies.get('token');

export const setToken = (userToken) => Cookies.set('token', userToken);

// return true if there is a token in cookies
export const isAuthenticated = () => {
  getToken();
};
