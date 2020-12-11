import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import {
  ADD_COMMENT,
} from 'src/common/redux/actions/comments';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  COMMENT, POST, ONE,
} from 'src/common/callApiHandler/constants';

const commentsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const url = getEndpoint(COMMENT, POST, ONE);

      callApi(url, POST, action.content)
        .then((response) => {
          // action.content.projectId <<< projectId
          console.log('todo Redirect');
        })
        .catch((response) => {
          console.log(response);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default commentsMiddleware;
