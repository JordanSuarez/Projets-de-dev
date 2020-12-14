import {
  SAVE_PROFILE,
  GET_PROFILE,
} from 'src/common/redux/actions/profile';

const initialState = {
  profile: {
    id: null,
    username: '',
    userImage: '',
    projects: [],
  },
  loading: true,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PROFILE: {
      return {
        ...state,
        loading: true,
      };
    }
    case SAVE_PROFILE: {
      if (action.profile.userImage === null || !action.profile.userImage) {
        action.profile.userImage = '';
      }
      return {
        ...state,
        profile: action.profile,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default profile;
