import {
  SHOW_PROJECT_BY_ID, FETCH_PROJECT_BY_ID,
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
    case SHOW_PROJECT_BY_ID:
      return {
        ...state,
        project: action.project,
        tags: action.tags,
        loading: false,
      };
    case FETCH_PROJECT_BY_ID:
      return {
        ...state,
        ...initialState,
      };
    default:
      return { ...state };
  }
};

export default project;
