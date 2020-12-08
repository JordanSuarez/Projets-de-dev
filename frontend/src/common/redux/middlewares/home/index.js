import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case FETCH_PROJECT_BY_ID: {
    //   const url = getEndpoint(PROJECTS, GET, ONE, action.projectId);

    //   callApi(url, GET)
    //     .then(({ data }) => {
    //       store.dispatch(showProjectById(data));
    //     })
    //     .catch(() => {});

    //   next(action);
    //   break;
    // }

    default:
      next(action);
  }
};
export default homeMiddleware;
