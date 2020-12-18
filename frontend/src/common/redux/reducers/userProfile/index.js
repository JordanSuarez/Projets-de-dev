import { SAVE_USER_PROFILE, GET_USER_PROFILE, SET_MY_LIKES, SAVE_PROJECTS, GET_PROFILE_LIKES } from 'src/common/redux/actions/userProfile';
import { SUBMIT_LOGOUT_SUCCESS } from 'src/common/redux/actions/auth';
import { getUser } from 'src/common/authentication/authProvider';

const initialState = {
  userProfile: {
    id: '',
    email: '',
    username: getUser() ? getUser().username : null,
    userImage: getUser() ? getUser().userImage : null,
    projects: [],
    myLikes: [],
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
    }
    case GET_USER_PROFILE: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PROFILE_LIKES: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_MY_LIKES: {
      return {
        ...state,
        myLikes: action.data,
        loading: false,
      };
    }
    case SAVE_PROJECTS: {
      return {
        ...state,
        projects: action.data,
      };
    }
    default: return { ...state };
  }
};

export default userProfile;
