export const REGISTER = 'REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_LOGIN_ERROR = 'SUBMIT_LOGIN_ERROR';
export const SUBMIT_LOGOUT_SUCCESS = 'SUBMIT_LOGOUT_SUCCESS';

export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

export const submitRegister = (email, password, username) => ({
  type: REGISTER,
  email,
  password,
  username,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

export const submitLoginSuccess = (nickname, isLogged) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  nickname,
  isLogged,
});

export const submitLoginError = () => ({
  type: SUBMIT_LOGIN_ERROR,
});

export const submitLogoutSuccess = (isLogged) => ({
  type: SUBMIT_LOGOUT_SUCCESS,
  isLogged,
});
