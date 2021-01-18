import {
  SUBMIT_LOGIN,
  submitLoginSuccess,
  submitRegisterSuccess,
  SUBMIT_REGISTER,
  submitLoginError,
  USER_AUTH_VERIFY,
  submitLogoutSuccess,
} from 'src/common/redux/actions/auth';
import {
  setChat
} from 'src/common/redux/actions/chat';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getProfileInfos } from 'src/common/redux/actions/userProfile';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import {
  setToken, setUserId, removeToken, removeUserId, removeUser,
} from 'src/common/authentication/authProvider';
import { getUserProfileRoute, getLoginRoute } from 'src/common/routing/routesResolver';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  USERS, POST, LOGIN, REGISTER, CONNECTED,
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
          setUserId(data.userId);
          store.dispatch(setChat('chatClosed'));
          store.dispatch(redirect(getUserProfileRoute()));
          store.dispatch(submitLoginSuccess(data.userId));
          store.dispatch(showSnackbar('', `Hello! ${data.username}`, 'success'));
        })
        .catch(() => {
          store.dispatch(showSnackbar('Oups!', 'Mot de passe ou email incorrect', 'error'));
          store.dispatch(submitLoginError());
        })
        .finally(() => {
          store.dispatch(getProfileInfos());
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
          store.dispatch(showSnackbar('', 'Votre compte à bien été créé', 'success'));
        })
        .catch(({ response }) => {
          store.dispatch(showSnackbar('Oups!', response.data.error, 'error'));
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case USER_AUTH_VERIFY: {
      const url = getEndpoint(USERS, POST, CONNECTED);
      // Verify on each page if user is connected, and if his token is not expired
      callApi(url, POST, action.token)
        .then(({ data }) => {
          setUserId(data.userId);
          store.dispatch(submitLoginSuccess(data.userId));
        })
        .catch(() => {
          removeToken();
          removeUserId();
          removeUser();
          store.dispatch(submitLogoutSuccess());
          store.dispatch(showSnackbar('Oups!', 'Votre session à expiré!', 'error'));
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default authMiddleWare;
