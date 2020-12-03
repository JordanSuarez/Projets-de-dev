import {
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  REGISTER,
  CHECK_LOGGED,
  submitLoginSuccess,
  redirectSuccess,
  submitLogoutSuccess,
  submitLoginError,
} from 'src/common/redux/actions/auth';
import axios from 'axios';
import { setToken, removeToken } from 'src/common/authentication/authProvider';
import { getHomeRoute } from 'src/common/routing/routesResolver';

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
          store.dispatch(redirectSuccess(getHomeRoute()));
          store.dispatch(submitLoginSuccess(data.userId));
          // store.dispatch(push('/'));
        })
        .catch((e) => {
          console.log(e);
        });

      next(action);
      break;
    }
    case SUBMIT_LOGOUT: {
      console.log(action, 'pass');
      // reset authentication cookie's when logout
      axios.post('http://localhost:3001/api/users/logout', {})
        .then(({ data }) => {
          console.log(data, 'middleware');
          removeToken();
          store.dispatch(submitLogoutSuccess());
          store.dispatch(redirectSuccess(getHomeRoute()));
        })
        .catch((error) => {
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          removeToken();
          store.dispatch(redirectSuccess(getHomeRoute()));
          store.dispatch(submitLogoutSuccess());
          console.log(error);
          // TODO REMOVE THIS WHEN LOGOUT WORKS
          // TODO REMOVE THIS WHEN LOGOUT WORKS
        });

      next(action);
      break;
    }
    case REGISTER: {
      console.log(action);
      // withCredentials send authentication informations in cookies
      axios.post('http://localhost:3001/api/users/register',
        {
          email: action.email,
          password: action.password,
          username: action.username,
        },
        {
          header: {
            'Access-Control-Allow-Origin': '*',
          },
        },
        {
          withCredentials: true,
        })
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
