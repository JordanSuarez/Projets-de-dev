import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  saveUserProfile,
  HANDLE_DELETE_USER_PROFILE,
} from 'src/common/redux/actions/userProfile';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { submitLogoutSuccess } from 'src/common/redux/actions/auth';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { removeToken } from 'src/common/authentication/authProvider';
import {
  USERS, PATCH, PRIVATE_PROFILE, DELETE,
} from 'src/common/callApiHandler/constants';
import { getUserProfileRoute, getHomeRoute } from 'src/common/routing/routesResolver';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import axios from 'axios';

const userProfile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_PROFILE: {
      axios.get('http://localhost:3001/api/users/me',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` || null,
          },
        })
        .then(({ data }) => {
          store.dispatch(saveUserProfile(data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case UPDATE_USER_PROFILE: {
      const url = getEndpoint(USERS, PATCH, PRIVATE_PROFILE);
      callApi(url, PATCH, action.data)
        .then(() => {
          store.dispatch(redirect(getUserProfileRoute()));
          store.dispatch(showSnackbar('', 'Ton profil à bien été modifié!', 'success'));
        })
        .catch((error) => {
          store.dispatch(showSnackbar('Oups!', 'Une erreur est survenue. Veuillez réessayer ultérieurement', 'error'));
          console.log(error);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });
      next(action);
      break;
    }
    case HANDLE_DELETE_USER_PROFILE: {
      const url = getEndpoint(USERS, DELETE, PRIVATE_PROFILE);
      callApi(url, DELETE)
        .then(() => {
          removeToken();
          store.dispatch(submitLogoutSuccess());
          store.dispatch(redirect(getHomeRoute()));
          store.dispatch(showSnackbar('', 'Votre compte à bien été supprimé', 'success'));
        })
        .catch((error) => {
          console.log(error);
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
export default userProfile;
