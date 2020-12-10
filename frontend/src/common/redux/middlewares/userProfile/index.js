import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  saveUserProfile,
  DELETE_USER_PROFILE,
} from 'src/common/redux/actions/userProfile';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { removeToken } from 'src/common/authentication/authProvider';
import {
  GET, USERS, PATCH, PRIVATE_PROFILE,
} from 'src/common/callApiHandler/constants';
import { getUserProfileRoute, getHomeRoute } from 'src/common/routing/routesResolver';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import axios from 'axios';

const userProfile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_PROFILE: {
      const url = getEndpoint(USERS, GET, PRIVATE_PROFILE);

      callApi(url, GET)
        .then((response) => {
          store.dispatch(saveUserProfile(response.data));
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
    case DELETE_USER_PROFILE: {
      axios.patch('/api/users/:id/edit',
        {
          params: {
            id: store.state.userId,
          },
        },
        {
          header: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${store.state.token}`,
          },
        },
        {
          withCredentials: true,
        })
        .then(() => {
          removeToken();
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
