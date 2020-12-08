import {
  SAVE_PROJECTS,
  SAVE_PROJECTS_NUMBER,
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
    case SAVE_PROJECTS_NUMBER: {
      const number = Object.keys(action.projects).length;
      return {
        ...state,
        projectsNumber: number,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default projects;
