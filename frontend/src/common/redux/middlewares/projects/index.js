import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  PROJECTS, GET, ALL, TWELVE,
} from 'src/common/callApiHandler/constants';
import {
  GET_PROJECTS,
  saveProjects,
  saveProjectsNumber,
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
          store.dispatch(saveProjects(response[0].data));
          store.dispatch(saveProjectsNumber(response[1].data));
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
