import { SAVE_USER_PROFILE, GET_USER_PROFILE } from 'src/common/redux/actions/userProfile';
import { SUBMIT_LOGOUT_SUCCESS } from 'src/common/redux/actions/auth';

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
        isLogged: true,
      };
    }
    case SUBMIT_LOGOUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    case GET_USER_PROFILE: {
      return {
        ...state,
        loading: true,
      };
    }
    default: return { ...state };
  }
};

export default userProfile;
