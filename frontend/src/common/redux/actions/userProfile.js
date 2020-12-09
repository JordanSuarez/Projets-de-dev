export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE';
export const REDIRECT_SUCCESS = 'REDIRECT_SUCCESS';

export const getProfileInfos = () => ({
  type: GET_USER_PROFILE,
});

export const saveUserProfile = (data) => ({
  type: SAVE_USER_PROFILE,
  userProfile: data,
});

export const updateProfile = (data) => ({
  type: UPDATE_USER_PROFILE,
  data,
});

export const deleteProfile = (data) => ({
  type: DELETE_USER_PROFILE,
  data,
});

export const redirectSuccess = (redirect) => ({
  type: REDIRECT_SUCCESS,
  redirect,
});
