export const GET_PROFILES = 'GET_PROFILES';
export const SAVE_PROFILES = 'SAVE_PROFILES';

// Get all profiles
export const getProfilesInfos = () => ({
  type: GET_PROFILES,
});
// Sava all profiles
export const saveProfiles = (data) => ({
  type: SAVE_PROFILES,
  profiles: { ...data },
});
