import { SAVE_PROFILES } from 'src/common/redux/actions/profiles';
import { DISABLE_LOADER } from 'src/common/redux/actions/loader';

const initialState = {
  profiles: {},
  loading: true,
};

const profiles = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILES: {
      return {
        ...state,
        profiles: action.profiles,
        loading: false,
      };
    }
    case DISABLE_LOADER: {
      return {
        ...state,
        loading: false,
      };
    }
    default: return { ...state };
  }
};

export default profiles;
