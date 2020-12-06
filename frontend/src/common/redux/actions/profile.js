export const GET_PROFILE_INFO = 'GET_PROFILE_INFO';
export const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

export const getProfileInfo = () => ({
  type: GET_PROFILE_INFO,
});

export const setProfileInfo = (email, password, username) => ({
  type: SET_PROFILE_INFO,
  email,
  password,
  username,
});
