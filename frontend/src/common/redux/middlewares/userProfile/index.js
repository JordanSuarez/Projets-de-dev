/* eslint-disable import/no-unresolved */
import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  saveUserProfile,
  DELETE_USER_PROFILE,
  redirectSuccess,
} from 'src/common/redux/actions/userProfile';
import { GET, USERS, PATCH, PRIVATE_PROFILE } from 'src/common/callApiHandler/constants';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { getUserProfileRoute } from 'src/common/routing/routesResolver';

const userProfile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_PROFILE: {
      const state = store.getState();
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
          // TODO alert avec confirmation + redirection page profil
          store.dispatch(redirectSuccess(getUserProfileRoute()));
        })
        .catch((error) => {
          console.log(error);
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
          // TODO alert avec confirmation de la suppression + déconnexion + redirection home
          console.log('suppresion ok');
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default userProfile;
