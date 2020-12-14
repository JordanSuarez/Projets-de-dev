import {
  FETCH_PROJECT_BY_ID,
  HANDLE_EDIT_PROJECT,
  HANDLE_CREATE_PROJECT,
  showProjectById,
  HANDLE_DELETE_PROJECT,
  FETCH_PROJECT_TAGS,
  showProjectTags,
} from 'src/common/redux/actions/project';
import {
  getProfileInfos,
} from 'src/common/redux/actions/userProfile';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi, apiUrl } from 'src/common/callApiHandler/urlHandler';
import { getToken } from 'src/common/authentication/authProvider';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import {
  PROJECTS, GET, POST, PATCH, ONE, DELETE, TAGS, ALL,
} from 'src/common/callApiHandler/constants';
import { getUserProfileRoute, getNotFoundRoute } from 'src/common/routing/routesResolver';
import { get } from 'lodash';
import axios from 'axios';

const projectMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROJECT_BY_ID: {
      const urlProject = getEndpoint(PROJECTS, GET, ONE, action.projectId);
      const urlTags = getEndpoint(TAGS, GET, ALL);

      const promises = [
        callApi(urlProject, GET),
        callApi(urlTags, GET),
      ];

      Promise.all(promises).then((response) => {
        const project = get(response[0], 'data');
        const tags = get(response[1], 'data');
        store.dispatch(showProjectById(project, tags));
      })
        .catch(() => {
          store.dispatch(redirect(getNotFoundRoute()));
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case FETCH_PROJECT_TAGS: {
      const url = getEndpoint(TAGS, GET, ALL);

      callApi(url, GET)
        .then(({ data }) => {
          store.dispatch(showProjectTags(data));
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
          store.dispatch(showSnackbar('', 'Votre projet à bien été soumis', 'success'));
        })
        .catch((e) => {
          store.dispatch(showSnackbar('Oups!', 'Une erreur est survenue. Veuillez réessayer ultérieurement', 'error'));
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
          store.dispatch(showSnackbar('', 'Votre projet à bien été soumis', 'success'));
        })
        .catch((e) => {
          store.dispatch(showSnackbar('Oups!', 'Une erreur est survenue. Veuillez réessayer ultérieurement', 'error'));
          console.log(e.request);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case HANDLE_DELETE_PROJECT: {
      axios.delete(`${apiUrl}/${PROJECTS}/${action.id}/${DELETE}-my-project`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}` || null,
          },
        })
        .then(() => {
          store.dispatch(getProfileInfos());
          store.dispatch(showSnackbar('', 'Votre projet à bien été supprimé', 'success'));
        })
        .catch((e) => {
          store.dispatch(showSnackbar('Oups!', 'Une erreur est survenue. Veuillez réessayer ultérieurement', 'error'));
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
