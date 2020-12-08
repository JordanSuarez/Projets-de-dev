import { GET_PROFILE, saveProfile } from 'src/common/redux/actions/profile';
import { GET, USERS, ONE } from 'src/common/callApiHandler/constants';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';

const profile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      const url = getEndpoint(USERS, GET, ONE, action.profileId);

      callApi(url, GET)
        .then(({ data }) => {
          store.dispatch(saveProfile(data));
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
