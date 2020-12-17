import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from 'src/common/redux/actions/comments';
import { fetchProjectById } from 'src/common/redux/actions/project';
import { callApi, apiUrl } from 'src/common/callApiHandler/urlHandler';
import { getToken } from 'src/common/authentication/authProvider';
import {
  COMMENT, POST, ONE, PATCH, DELETE,
} from 'src/common/callApiHandler/constants';
import { getProjectRoute } from 'src/common/routing/routesResolver';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';
import { showSnackbar } from 'src/common/redux/actions/snackbar';
import axios from 'axios';

const commentsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const url = getEndpoint(COMMENT, POST, ONE);

      callApi(url, POST, action.content)
        .then((response) => {
          store.dispatch(fetchProjectById(action.content.projectId));
          store.dispatch(redirect(getProjectRoute(action.content.projectId)));
        })
        .catch((response) => {
          console.log(response);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case EDIT_COMMENT: {
      const url = getEndpoint(COMMENT, PATCH, ONE, action.id);

      callApi(url, PATCH, action.comments)
        .then((response) => {
          store.dispatch(redirect(getProjectRoute(action.comments.projectId)));
        })
        .catch((response) => {
          console.log(response);
        })
        .finally(() => {
          store.dispatch(redirectSuccess());
        });

      next(action);
      break;
    }
    case DELETE_COMMENT: {
      axios.delete(`${apiUrl}/${COMMENT}/${action.id}/${DELETE}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}` || null,
          },
        })
        .then(() => {
          store.dispatch(showSnackbar('', 'Le commentaire à bien été supprimé', 'info'));
          store.dispatch(redirect(getProjectRoute(action.comments.projectId)));
        })
        .catch(() => {
          store.dispatch(showSnackbar('Oups!', 'Une erreur est survenue. Veuillez réessayer ultérieurement', 'error'));
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default commentsMiddleware;
