import {
  SAVE_PROFILES,
// eslint-disable-next-line import/no-unresolved
} from 'src/common/redux/actions/profiles';

const initialState = {
  profiles: {},
  loading: true,
};

const profiles = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILES: {
      console.log(action.profiles);
      return {
        ...state,
        profiles: action.profiles,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default profiles;
