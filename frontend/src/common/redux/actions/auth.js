export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_LOGIN_ERROR = 'SUBMIT_LOGIN_ERROR';
export const SUBMIT_LOGOUT_SUCCESS = 'SUBMIT_LOGOUT_SUCCESS';
export const SUBMIT_REGISTER_SUCCESS = 'SUBMIT_REGISTER_SUCCESS';
export const CHANGE_HAS_ERROR = 'CHANGE_HAS_ERROR';
export const USER_AUTH_VERIFY = 'USER_AUTH_VERIFY';

export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

export const submitRegister = (email, password, username) => ({
  type: SUBMIT_REGISTER,
  email,
  password,
  username,
});

export const userAuthVerify = (token) => ({
  type: USER_AUTH_VERIFY,
  token,
});

export const submitLoginSuccess = (userId) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  userId,
});

export const submitLoginError = () => ({
  type: SUBMIT_LOGIN_ERROR,
});

export const submitLogoutSuccess = () => ({
  type: SUBMIT_LOGOUT_SUCCESS,
});

export const submitRegisterSuccess = (userEmail) => ({
  type: SUBMIT_REGISTER_SUCCESS,
  userEmail,
});

export const changeHasErrorValue = (value) => ({
  type: CHANGE_HAS_ERROR,
  value,
});
