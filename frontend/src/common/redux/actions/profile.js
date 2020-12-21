export const GET_PROFILE = 'GET_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE';

// Récupération d'un profil ayant un id précis
export const getProfileInfos = (profileId) => ({
  type: GET_PROFILE,
  profileId,
});

// Sauvegarde d'un profil ayant un id précis
export const saveProfile = (profile) => ({
  type: SAVE_PROFILE,
  profile,
});

export const clearProfileState = () => ({
  type: CLEAR_PROFILE_STATE,
});
