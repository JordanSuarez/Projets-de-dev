import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import {
  ADD_COMMENT,
  EDIT_COMMENT,
} from 'src/common/redux/actions/comments';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  COMMENT, POST, ONE, PATCH,
} from 'src/common/callApiHandler/constants';
import { getProjectRoute } from 'src/common/routing/routesResolver';
import { redirectSuccess, redirect } from 'src/common/redux/actions/redirection';

const commentsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const url = getEndpoint(COMMENT, POST, ONE);

      callApi(url, POST, action.content)
        .then((response) => {
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
      console.log(action.id);
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
    default:
      next(action);
  }
};
export default commentsMiddleware;
