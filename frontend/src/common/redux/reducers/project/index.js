import {
  SHOW_PROJECT_BY_ID,
  FETCH_PROJECT_BY_ID,
  SHOW_PROJECT_TAGS,
  HANDLE_EDIT_PROJECT,
  HANDLE_CREATE_PROJECT,
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
      };
    case SHOW_PROJECT_TAGS:
      return {
        ...state,
        tags: action.tags,
      };
    case HANDLE_EDIT_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case HANDLE_CREATE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
};

export default project;
