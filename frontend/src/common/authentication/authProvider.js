export const removeToken = () => localStorage.removeItem('token');

export const getToken = () => localStorage.getItem('token');

export const setToken = (userToken) => localStorage.setItem('token', userToken);
// console.log(getToken());
// return true if there is a token in cookies
export const isAuthenticated = () => getToken();
