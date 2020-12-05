import {
  FETCH_PROJECT_BY_ID, showProjectById,
} from 'src/common/redux/actions/project';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { PROJECTS, GET, ONE } from 'src/common/callApiHandler/constants';

const projectMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROJECT_BY_ID: {
      const url = getEndpoint(PROJECTS, GET, ONE, action.projectId);

      callApi(url, GET)
        .then(({ data }) => {
          console.log(data);
          store.dispatch(showProjectById(data));
        })
        .catch(() => {});

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default projectMiddleWare;
