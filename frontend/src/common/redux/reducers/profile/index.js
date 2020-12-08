import {
  SAVE_PROFILE,
// eslint-disable-next-line import/no-unresolved
} from 'src/common/redux/actions/profile';

const initialState = {
  profile: {
    id: null,
    username: '',
    userImage: '',
    Projects: [],
  },
  loading: true,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
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
