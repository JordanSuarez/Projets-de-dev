import {
  FETCH_PROJECT_BY_ID, HANDLE_EDIT_PROJECT, HANDLE_CREATE_PROJECT, showProjectById,
} from 'src/common/redux/actions/project';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  PROJECTS, GET, POST, PATCH, ONE,
} from 'src/common/callApiHandler/constants';

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
    case HANDLE_CREATE_PROJECT: {
      const url = getEndpoint(PROJECTS, POST, ONE);

      callApi(url, POST, action.formProjectValues)
        .then(({ data }) => {
          console.log(data);
          store.dispatch(showProjectById(data));
        })
        .catch((e) => {
          console.log(e.request);
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_PROJECT: {
      const projectId = store.getState().project.project.id;
      const url = getEndpoint(PROJECTS, PATCH, ONE, projectId);

      callApi(url, PATCH, action.formProjectValues)
        .then(({ data }) => {
          console.log(data);
          store.dispatch(showProjectById(data));
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
export default projectMiddleWare;
