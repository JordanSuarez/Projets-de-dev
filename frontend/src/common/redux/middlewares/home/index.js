import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  GET_LATEST_PROJECTS,
  saveLatestProjects,
} from 'src/common/redux/actions/home';
import { PROJECTS, GET, LATEST } from 'src/common/callApiHandler/urlHandler';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LATEST_PROJECTS: {
      const url = getEndpoint(PROJECTS, GET, LATEST);

      callApi(url, GET)
        .then(() => {
          store.dispatch(saveLatestProjects());
        })
        .catch((e) => {
          console.log(e.request);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default homeMiddleware;
