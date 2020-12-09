import {
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGOUT_SUCCESS,
  REDIRECT_SUCCESS,
  SUBMIT_LOGIN_ERROR,
  SUBMIT_REGISTER_SUCCESS,
  CHANGE_HAS_ERROR,
} from 'src/common/redux/actions/auth';
import { getToken } from 'src/common/authentication/authProvider';


const initialState = {
  isLogged: !!getToken(),
  userId: '',
  userEmail: '',
  token: getToken() || '',
  redirect: '',
  hasError: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userId: action.userId,
        userEmail: '',
        token: getToken(),
        redirect: '',
        hasError: false,
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
        userEmail: '',
        token: '',
        redirect: '',
        hasError: false,
      };
    case SUBMIT_REGISTER_SUCCESS:
      return {
        ...state,
        userEmail: action.userEmail,
        redirect: '',
        hasError: false,
      };
    case REDIRECT_SUCCESS:
      return {
        ...state,
        redirect: action.redirect,
      };
    case CHANGE_HAS_ERROR:
      return {
        ...state,
        hasError: false,
      };
    default:
      return { ...state };
  }
};

export default auth;
