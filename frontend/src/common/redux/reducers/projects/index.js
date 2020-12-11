import {
  SAVE_ALL_PROJECTS,
  SAVE_PROJECTS_CURRENT_PAGE,
  GET_PROJECTS,
// eslint-disable-next-line import/no-unresolved
} from 'src/common/redux/actions/projects';

const initialState = {
  projectsNumber: 1,
  projectsCurrentPage: {},
  allProjects: {},
  loading: true,
};

const projects = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PROJECTS: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case SAVE_PROJECTS_CURRENT_PAGE: {
      return {
        ...state,
        projectsCurrentPage: action.projects,
        loading: false,
      };
    }
    case SAVE_ALL_PROJECTS: {
      const number = Object.keys(action.projects).length;
      return {
        ...state,
        projectsNumber: number,
        allProjects: action.projects,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default projects;
