export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const HANDLE_DELETE_USER_PROFILE = 'HANDLE_DELETE_USER_PROFILE';
export const GET_PROFILE_LIKES = 'GET_PROFILE_LIKES';
export const SET_MY_LIKES = 'SET_MY_LIKES';

export const getProfileInfos = () => ({
  type: GET_USER_PROFILE,
});

export const saveUserProfile = (userProfile) => ({
  type: SAVE_USER_PROFILE,
  userProfile,
});

export const updateProfile = (data) => ({
  type: UPDATE_USER_PROFILE,
  data,
});

export const handleDeleteUserProfile = () => ({
  type: HANDLE_DELETE_USER_PROFILE,
});

export const getProfileLikes = () => ({
  type: GET_PROFILE_LIKES,
});

export const setMyLikes = (data) => ({
  type: SET_MY_LIKES,
  data,
});
