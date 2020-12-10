import {
  SAVE_COMMENTS,
} from 'src/common/redux/actions/comments';

const initialState = {
  comments: {},
  loading: true,
};

const comments = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COMMENTS: {
      return {
        ...state,
        comments: action.projects,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default comments;
