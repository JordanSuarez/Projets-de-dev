import {
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  submitLoginSuccess,
  redirectSuccess,
  submitLogoutSuccess,
  submitRegisterSuccess,
  SUBMIT_REGISTER,
  submitLoginError,
} from 'src/common/redux/actions/auth';
import { setToken, removeToken } from 'src/common/authentication/authProvider';
import { getHomeRoute, getLoginRoute } from 'src/common/routing/routesResolver';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  USERS, POST, LOGIN, LOGOUT, REGISTER,
} from 'src/common/callApiHandler/constants';

const authMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const url = getEndpoint(USERS, POST, LOGIN);
      const credentials = {
        email: action.email,
        password: action.password,
      };

      callApi(url, POST, credentials)
        .then(({ data }) => {
          setToken(data.token);
          store.dispatch(redirectSuccess(getHomeRoute()));
          store.dispatch(submitLoginSuccess(data.userId));
        })
        .catch(() => {
          store.dispatch(submitLoginError());
        });
      next(action);
      break;
    }
    case SUBMIT_LOGOUT: {
      const url = getEndpoint(USERS, POST, LOGOUT);

      callApi(url, POST)
        .then(() => {
          // reset authentication cookie's when logout
          removeToken();
          store.dispatch(redirectSuccess(getHomeRoute()));
          store.dispatch(submitLogoutSuccess());
        })
        .catch(() => {
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          removeToken();
          store.dispatch(redirectSuccess(getHomeRoute()));
          store.dispatch(submitLogoutSuccess());
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          // TODO REMOVE THIS WHEN LOGOUT WORKS
        });

      next(action);
      break;
    }
    case SUBMIT_REGISTER: {
      const url = getEndpoint(USERS, POST, REGISTER);
      const credentials = {
        email: action.email,
        password: action.password,
        username: action.username,
      };

      callApi(url, POST, credentials)
        .then(() => {
          store.dispatch(redirectSuccess(getLoginRoute()));
          store.dispatch(submitRegisterSuccess(action.email));
        })
        .catch(() => {});

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default authMiddleWare;
