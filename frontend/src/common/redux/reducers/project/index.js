import {
  SHOW_PROJECT_BY_ID, REDIRECT_SUCCESS,
} from 'src/common/redux/actions/project';

const initialState = {
  project: {},
  loading: true,
  redirect: '',
};

const project = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_PROJECT_BY_ID:
      return {
        ...state,
        project: action.project,
        loading: false,
      };
    case REDIRECT_SUCCESS:
      return {
        ...state,
        redirect: action.redirect,
      };
    default:
      return { ...state };
  }
};

export default project;
