/* eslint-disable import/no-unresolved */
import {
  GET_PROJECTS,
  saveProjects,
} from 'src/common/redux/actions/projects';
import axios from 'axios';

const profiles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROJECTS: {
      axios.get(
        'http://localhost:3001/api/projects',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json, charset=utf-8',
            Accept: 'application/json',
          },
        },
        {
          withCredentials: true,
        },
      )
        .then((response) => {
          console.log(response.data);
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
