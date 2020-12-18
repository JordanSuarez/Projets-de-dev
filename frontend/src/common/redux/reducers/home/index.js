import {
  SAVE_LATEST_PROJECTS,
  GET_LATEST_PROJECTS,
} from 'src/common/redux/actions/home';

const initialState = {
  projects: {},
  loading: true,
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LATEST_PROJECTS: {
      return {
        ...initialState,
        loading: true,
      };
    }
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
