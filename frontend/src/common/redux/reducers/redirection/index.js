import { REDIRECT_SUCCESS, REDIRECT } from 'src/common/redux/actions/redirection';

const initialState = {
  redirect: '',
};

const redirection = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDIRECT:
      return {
        ...state,
        redirect: action.redirection,
      };
    case REDIRECT_SUCCESS:
      return {
        ...state,
        redirect: '',
      };
    default: return { ...state };
  }
};

export default redirection;
