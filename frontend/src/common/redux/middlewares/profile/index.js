/* eslint-disable import/no-unresolved */
import {
  GET_PROFILE,
  saveProfile,
} from 'src/common/redux/actions/profile';
import axios from 'axios';

const profile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      const state = store.getState();
      axios.get(
        'http://localhost:3001/api/users/:id',
        {
          params: {
            id: state.profileId,
          },
        },
        {
          withCredentials: true,
        },
      )
        .then((response) => {
          store.dispatch(saveProfile(response.data));
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
