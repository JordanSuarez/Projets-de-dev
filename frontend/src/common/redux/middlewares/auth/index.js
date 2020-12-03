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
      axios.post(
        'http://localhost:3001/api/users/login',
        {
          email: action.email,
          password: action.password,
        },
        {
          header: {
            'Access-Control-Allow-Origin': '*',
          },
        },
        {
          withCredentials: true,
        },
      )
        .then(({ data }) => {
          setToken(data.token);
        })
        .catch((e) => {
          console.log(e.response);
        });

      next(action);
      break;
    }
    case SUBMIT_LOGOUT: {
      // reset authentication cookie's when logout
      axios.post('http://localhost:6000/api/users/logout', {})
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
      axios.post('http://localhost:6000/users/register', 
      {
        email: action.email,
        password: action.password,
        username: action.username,
      },
      {
        withCredentials: true,
      },)
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
