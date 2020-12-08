import {
  SAVE_LATEST_PROJECTS,
// eslint-disable-next-line import/no-unresolved
} from 'src/common/redux/actions/projects';

const initialState = {
  projects: {},
  loading: true,
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LATEST_PROJECTS: {
      return {
        ...state,
        projects: action.projects,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default home;
