import {
  SHOW_PROJECT_BY_ID,
} from 'src/common/redux/actions/project';

const initialState = {
  project: {},
};

const project = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_PROJECT_BY_ID:
      return {
        ...state,
        project: action.project,
      };
    default:
      return { ...state };
  }
};

export default project;
