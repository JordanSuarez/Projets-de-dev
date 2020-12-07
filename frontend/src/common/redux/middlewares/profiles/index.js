/* eslint-disable import/no-unresolved */
import {
  GET_PROFILES,
  saveProfiles,
} from 'src/common/redux/actions/profiles';
import axios from 'axios';

const profiles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILES: {
      axios.get(
        'http://localhost:3001/api/users',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json, charset=utf-8',
            Accept: 'application/json',
          },
        },
        {
          withCredentials: true,
        },
      )
        .then((response) => {
          store.dispatch(saveProfiles(response.data));
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
export default profiles;
