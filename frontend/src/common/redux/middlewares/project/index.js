import {
  FETCH_PROJECT_BY_ID, HANDLE_EDIT_PROJECT, HANDLE_CREATE_PROJECT, showProjectById,
} from 'src/common/redux/actions/project';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  PROJECTS, GET, POST, PATCH, ONE,
} from 'src/common/callApiHandler/constants';
import { getUserProfileRoute } from 'src/common/routing/routesResolver';

const projectMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROJECT_BY_ID: {
      const url = getEndpoint(PROJECTS, GET, ONE, action.projectId);

      callApi(url, GET)
        .then(({ data }) => {
          store.dispatch(showProjectById(data));
        })
        .catch(() => {});

      next(action);
      break;
    }
    case HANDLE_CREATE_PROJECT: {
      const url = getEndpoint(PROJECTS, POST, ONE);

      callApi(url, POST, action.formProjectValues)
        .then(() => {
          store.dispatch(redirect(getUserProfileRoute()));
        })
        .catch((e) => {
          console.log(e.request);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case HANDLE_EDIT_PROJECT: {
      const projectId = store.getState().project.project.id;
      const url = getEndpoint(PROJECTS, PATCH, ONE, projectId);

      callApi(url, PATCH, action.formProjectValues)
        .then(() => {
          store.dispatch(redirect(getUserProfileRoute()));
        })
        .catch((e) => {
          console.log(e.request);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default projectMiddleWare;
