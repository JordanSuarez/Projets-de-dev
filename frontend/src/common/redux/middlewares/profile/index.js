import {
  GET_PROFILE_INFO,
  SET_PROFILE_INFO,
} from 'src/common/redux/actions/profile';
import axios from 'axios';

const profile = (store) => (next) => (action) => {
  console.log('je suis dans le mid');
  switch (action.type) {
    case GET_PROFILE_INFO: {
      const state = store.getState();
      console.log(`Bearer ${state.auth.token}`);
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
        .then((data) => {
          console.log(data.response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      next(action);
      break;
    }
    case SET_PROFILE_INFO: {
      console.log(action, 'pass');
      // reset authentication cookie's when logout
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
          console.log('modification ok');
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
export default profile;
