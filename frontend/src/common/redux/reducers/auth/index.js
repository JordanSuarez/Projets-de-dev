import {
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGOUT_SUCCESS,
  SUBMIT_LOGIN_ERROR,
} from 'src/common/redux/actions/auth';

const initialState = {
  isLogged: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        username: action.username,
        isLogged: action.isLogged,
      };
    case SUBMIT_LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case SUBMIT_LOGOUT_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        username: '',
        isLogged: action.isLogged,
        loggedMessage: 'Déconnecté',
      };
    default: return { ...state };
  }
};

export default auth;
