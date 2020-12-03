import {
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGOUT_SUCCESS,
  REDIRECT_SUCCESS,
  SUBMIT_LOGIN_ERROR,
} from 'src/common/redux/actions/auth';
import { getToken, removeToken } from 'src/common/authentication/authProvider';

const initialState = {
  isLogged: !!getToken(),
  userId: '',
  token: getToken() || '',
  redirect: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userId: action.userId,
        token: getToken(),
        redirect: '',
      };
    case SUBMIT_LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case SUBMIT_LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        userId: '',
        token: '',
        redirect: '',
      };
    case REDIRECT_SUCCESS:
      return {
        ...state,
        redirect: action.redirect,
      };
    default:
      return { ...state };
  }
};

export default auth;
