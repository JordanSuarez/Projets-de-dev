export const GET_PROFILES = 'GET_PROFILES';
export const SAVE_PROFILES = 'SAVE_PROFILES';

// Récuperation de tout les profils
export const getProfilesInfos = () => ({
  type: GET_PROFILES,
});
// Sauvegarde de tout les profils
export const saveProfiles = (data) => ({
  type: SAVE_PROFILES,
  profiles: { ...data },
});
