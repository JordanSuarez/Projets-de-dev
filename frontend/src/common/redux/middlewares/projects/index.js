import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  PROJECTS, GET, ALL, TWELVE, LIKEPROJECT, POST, IDISLIKE, ILIKE,
} from 'src/common/callApiHandler/constants';
import {
  GET_PROJECTS,
  saveAllProjects,
  saveProjectsCurrentPage,
  ADD_LIKE,
  ADD_DISLIKE,
} from 'src/common/redux/actions/projects';

const profiles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROJECTS: {
      const url = getEndpoint(PROJECTS, GET, TWELVE, action.projectLimit, action.projectOffset);
      const url2 = getEndpoint(PROJECTS, GET, ALL);
      const promises = [
        callApi(url, GET),
        callApi(url2, GET),
      ];
      Promise.all(promises)
        .then((response) => {
          store.dispatch(saveProjectsCurrentPage(response[0].data));
          store.dispatch(saveAllProjects(response[1].data));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case ADD_LIKE: {
      const url = getEndpoint(LIKEPROJECT, POST, ILIKE, action.projectId);

      callApi(url, POST)
        .then(() => {
        })
        .catch(() => {
        });

      next(action);
      break;
    }
    case ADD_DISLIKE: {
      const url = getEndpoint(LIKEPROJECT, POST, IDISLIKE, action.projectId);

      callApi(url, POST)
        .then(() => {
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
