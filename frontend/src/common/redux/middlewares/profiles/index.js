/* eslint-disable import/no-unresolved */
import {
  GET_PROFILES,
  saveProfiles,
} from 'src/common/redux/actions/profiles';
import { GET, USERS, ALL } from 'src/common/callApiHandler/constants';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';


const profiles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILES: {
      const url = getEndpoint(USERS, GET, ALL);

      callApi(url, GET)
        .then((response) => {
          store.dispatch(saveProfiles(response.data));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default profiles;
