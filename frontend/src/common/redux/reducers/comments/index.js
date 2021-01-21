import {

} from 'src/common/redux/actions/comments';

const initialState = {
  comments: {},
  loading: true,
};

const comments = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default comments;
