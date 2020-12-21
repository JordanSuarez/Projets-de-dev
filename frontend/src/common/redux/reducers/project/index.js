import {
  SHOW_PROJECT_BY_ID,
  FETCH_PROJECT_BY_ID,
  SHOW_PROJECT_TAGS,
  HANDLE_EDIT_PROJECT,
  HANDLE_CREATE_PROJECT,
  PROJECT_HAS_ERROR,
  CLEAR_PROJECT_STATE,
} from 'src/common/redux/actions/project';

const initialState = {
  project: {
    id: null,
    title: '',
    description: '',
    image: '',
    tags: [],
    user: {
      id: null,
      username: '',
      userImage: '',
    },
  },
  tags: [],
  loading: true,
  hasError: false,
};

const project = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROJECT_BY_ID:
      return {
        ...state,
        ...initialState,
      };
    case SHOW_PROJECT_BY_ID:
      return {
        ...state,
        project: action.project,
        tags: action.tags,
        loading: false,
        hasError: false,
      };
    case SHOW_PROJECT_TAGS:
      return {
        ...state,
        tags: action.tags,
        hasError: false,
      };
    case HANDLE_EDIT_PROJECT:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case HANDLE_CREATE_PROJECT:
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    case PROJECT_HAS_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    case CLEAR_PROJECT_STATE:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};

export default project;
