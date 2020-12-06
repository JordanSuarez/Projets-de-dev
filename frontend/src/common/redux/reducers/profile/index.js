import {

} from 'src/common/redux/actions/profile';

const initialState = {
  email: '',
  password: '',
  username: '',
  userImage: '',
  isLogged: false,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default profile;
