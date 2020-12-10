import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import {
  ADD_COMMENTS,
} from 'src/common/redux/actions/comments';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  COMMENTS, GET, ALL,
} from 'src/common/callApiHandler/constants';

const commentsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENTS: {
      const url = getEndpoint(COMMENTS, GET, ALL);

      callApi(url, GET)
        .then((response) => {
          console.log('add comment ok');
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
