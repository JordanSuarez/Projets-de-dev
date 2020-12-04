import {
  FETCH_PROJECT_BY_ID, showProjectById,
} from 'src/common/redux/actions/project';
import axios from 'axios';

const projectMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROJECT_BY_ID: {
      axios.get(
        `http://localhost:3001/api/projects/${action.projectId}`,
        {
          header: {
            'Access-Control-Allow-Origin': '*',
          },
        },
        {
          withCredentials: true,
        },
      )
        .then(({ data }) => {
          store.dispatch(showProjectById(data));
        })
        .catch((e) => {
          console.log(e);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default projectMiddleWare;
