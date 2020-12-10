import {
  SUBMIT_LOGIN,
  submitLoginSuccess,
  submitRegisterSuccess,
  SUBMIT_REGISTER,
  submitLoginError,
} from 'src/common/redux/actions/auth';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getProfileInfos } from 'src/common/redux/actions/userProfile';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import { setToken } from 'src/common/authentication/authProvider';
import { getHomeRoute, getLoginRoute } from 'src/common/routing/routesResolver';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  USERS, POST, LOGIN, REGISTER,
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
        .catch(() => {
          store.dispatch(showSnackbar('Oups!', 'Une erreur est survenue. Veuillez réessayer ultérieurement', 'error'));
        })
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
