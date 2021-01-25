export const GET_PROFILE = 'GET_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';

// Retrieving a profile with a specific id
export const getProfileInfos = (profileId) => ({
  type: GET_PROFILE,
  profileId,
});

// Saving a profile with a specific id
export const saveProfile = (profile) => ({
  type: SAVE_PROFILE,
  profile,
});
