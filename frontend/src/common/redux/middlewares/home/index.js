import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import {
  GET_LATEST_PROJECTS,
  saveLastestProjects,
} from 'src/common/redux/actions/home';
import { getProfileLikes } from 'src/common/redux/actions/userProfile';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  PROJECTS, GET, TWELVE,
} from 'src/common/callApiHandler/constants';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LATEST_PROJECTS: {
      const url = getEndpoint(PROJECTS, GET, TWELVE, action.projectLimit, action.projectOffset);
      callApi(url, GET)
        .then((response) => {
          store.dispatch(saveLastestProjects(response.data));
        })
        .then(() => {
          store.dispatch(getProfileLikes());
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
export default homeMiddleware;
