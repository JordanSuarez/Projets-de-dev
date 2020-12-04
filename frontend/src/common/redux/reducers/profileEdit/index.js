import {

} from 'src/common/redux/actions/profileEdit';

const initialState = {
  email: '',
  password: '',
  username: '',
  userImage: '',
  isLogged: false,
};

const profileEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default profileEdit;
