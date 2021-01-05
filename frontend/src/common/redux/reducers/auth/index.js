import {
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGOUT_SUCCESS,
  SUBMIT_LOGIN_ERROR,
  SUBMIT_REGISTER_SUCCESS,
  CHANGE_HAS_ERROR,
} from 'src/common/redux/actions/auth';
import { getToken, getUserId } from 'src/common/authentication/authProvider';

const initialState = {
  isLogged: !!getToken(),
  userId: parseInt(getUserId(), 10) || null,
  hasError: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userId: action.userId,
        hasError: false,
      };
    case SUBMIT_LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case SUBMIT_LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLogged: false,
      };
    case SUBMIT_REGISTER_SUCCESS:
      return {
        ...state,
        hasError: false,
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
