export const GET_PROFILE = 'GET_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';

export const getProfileInfos = () => ({
  type: GET_PROFILE,
});

export const saveProfile = (data) => ({
  type: SAVE_PROFILE,
  userProfile: { ...data[0] },
});

export const updateProfile = (data) => ({
  type: UPDATE_PROFILE,
  data,
});

export const deleteProfile = (data) => ({
  type: DELETE_PROFILE,
  data,
});
