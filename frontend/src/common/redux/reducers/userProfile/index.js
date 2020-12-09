import {
  SAVE_USER_PROFILE,
  REDIRECT_SUCCESS,
} from 'src/common/redux/actions/userProfile';

const initialState = {
  userProfile: {
    id: '',
    email: '',
    username: '',
    userImage: '',
    projects: [],
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
    case REDIRECT_SUCCESS:
      return {
        ...state,
        redirect: action.redirect,
      };
    default: return { ...state };
  }
};

export default userProfile;
