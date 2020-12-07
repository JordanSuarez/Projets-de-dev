import {
  SAVE_USER_PROFILE,
// eslint-disable-next-line import/no-unresolved
} from 'src/common/redux/actions/userProfile';

const initialState = {
  userProfile: {
    id: '',
    email: '',
    username: '',
    userImage: '',
    Projects: [],
  },
  isLogged: false,
  loading: true,
};

const userProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default userProfile;
