import {
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  REGISTER,
  CHECK_LOGGED,
  FETCH_FAVORITE_RECIPES,
  submitLoginSuccess,
  submitLogoutSuccess,
  submitLoginError,
  fetchFavoriteRecipes,
  saveFavoriteRecipes,
} from 'src/common/redux/actions/auth';
import axios from 'axios';
import { setToken, removeToken } from 'src/common/authentication/authProvider';

// Authorization: `Bearer ${getToken()}`,

const authMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { auth } = store.getState();
      axios.post(
        'http://localhost:4000/api/users/login',
        {
          header: {
            'Access-Control-Allow-Origin': '*',
          },
        },
        {
          email: 'albanvincent.pro@gmail.com',
          password: 'adidas',
        }, {
          withCredentials: true,
        },

      )
        .then(({ data }) => {
          setToken(data.token);
        //   store.dispatch(submitLoginSuccess(data.pseudo, data.logged));
        })
        .catch(() => {
        //   store.dispatch(submitLoginError());
        });

      next(action);
      break;
    }
    case SUBMIT_LOGOUT: {
      // reset authentication cookie's when logout
      axios.post('http://localhost:4000/api/users/logout', {})
        .then(({ data }) => {
          removeToken();
        //   store.dispatch(submitLogoutSuccess(data.logged));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case REGISTER: {
      // withCredentials send authentication informations in cookies
      axios.post('http://localhost:4000/users/register', {})
        .then(({ data }) => {
        //   store.dispatch(register(data.email, data.password, data.username));
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
export default authMiddleWare;
