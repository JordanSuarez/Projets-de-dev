import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  saveUserProfile,
  HANDLE_DELETE_USER_PROFILE,
  GET_PROFILE_LIKES,
  setMyLikes,
  saveProjects,
  GET_PROJECTS,
} from 'src/common/redux/actions/userProfile';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { submitLogoutSuccess } from 'src/common/redux/actions/auth';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi, apiUrl } from 'src/common/callApiHandler/urlHandler';
import { removeToken, getToken, setUser } from 'src/common/authentication/authProvider';
import {
  USERS, PATCH, PRIVATE_PROFILE, DELETE, ME, LIKES, PROJECTS, ALL, GET,
} from 'src/common/callApiHandler/constants';
import { getUserProfileRoute, getHomeRoute } from 'src/common/routing/routesResolver';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import axios from 'axios';

const userProfile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_PROFILE: {
      axios.get(`${apiUrl}/${USERS}/${ME}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}` || null,
          },
        })
        .then(({ data }) => {
          setUser({ id: data.id, username: data.username, userImage: data.userImage });
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
      axios.delete(`${apiUrl}/${USERS}/${ME}/${DELETE}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}` || null,
          },
        })
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
    case GET_PROFILE_LIKES: {
      axios.get(`${apiUrl}/${USERS}/${ME}/${LIKES}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}` || null,
          },
        })
        .then(({ data }) => {
          store.dispatch(setMyLikes(data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case GET_PROJECTS: {
      const url = getEndpoint(PROJECTS, GET, ALL);

      callApi(url, GET)
        .then((response) => {
          store.dispatch(saveProjects(response.data));
        })
        .catch((response) => {
          console.log(response);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default userProfile;
