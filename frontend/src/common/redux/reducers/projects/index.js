import {
  SAVE_PROJECTS,
// eslint-disable-next-line import/no-unresolved
} from 'src/common/redux/actions/projects';

const initialState = {
  projects: {},
  loading: true,
};

const projects = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROJECTS: {
      return {
        ...state,
        projects: action.projects,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default projects;
