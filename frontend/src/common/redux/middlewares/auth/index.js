import {
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  submitLoginSuccess,
  submitLogoutSuccess,
  submitRegisterSuccess,
  SUBMIT_REGISTER,
  submitLoginError,
} from 'src/common/redux/actions/auth';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
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
          store.dispatch(redirect(getHomeRoute()));
          store.dispatch(submitLoginSuccess(data.userId, data.token));
          store.dispatch(showSnackbar('', 'Hello!', 'success'));
        })
        .catch(() => {
          store.dispatch(submitLoginError());
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
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
          store.dispatch(redirect(getHomeRoute()));
          store.dispatch(submitLogoutSuccess());
        })
        .catch(() => {
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          removeToken();
          store.dispatch(redirect(getHomeRoute()));
          store.dispatch(submitLogoutSuccess());
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          // TODO REMOVE THIS WHEN LOGOUT WORKS
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
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
          store.dispatch(redirect(getLoginRoute()));
          store.dispatch(submitRegisterSuccess(action.email));
        })
        .catch(() => {})
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default authMiddleWare;
