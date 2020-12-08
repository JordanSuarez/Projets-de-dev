/* eslint-disable import/no-unresolved */
import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  saveUserProfile,
  DELETE_USER_PROFILE,
} from 'src/common/redux/actions/userProfile';
import axios from 'axios';

const userProfile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_PROFILE: {
      const state = store.getState();
      axios.get(
        'http://localhost:3001/api/users/me',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json, charset=utf-8',
            Accept: 'application/json',
            Authorization: `Bearer ${state.auth.token}`,
          },
        },
        {
          withCredentials: true,
        },
      )
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
      const state = store.getState();
      axios.patch('/api/users/:id/edit',
        {
          params: {
            id: state.id,
          },
        },
        {
          header: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${state.auth.token}`,
          },
        },
        {
          withCredentials: true,
        })
        .then(() => {
          // TODO alert avec confirmation + redirection page profil
          console.log('modification ok');
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
