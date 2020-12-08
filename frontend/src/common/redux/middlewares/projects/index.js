import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import {
  PROJECTS, GET, ALL,
} from 'src/common/callApiHandler/constants';
import {
  GET_PROJECTS,
  saveProjects,
} from 'src/common/redux/actions/projects';
import axios from 'axios';

const profiles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROJECTS: {
      const url = getEndpoint(PROJECTS, GET, ALL, action.projectLimit, action.projectOffset);
      callApi(url, GET)
        .then((response) => {
          console.log(response, action.projectOffset);
          store.dispatch(saveProjects(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default profiles;
