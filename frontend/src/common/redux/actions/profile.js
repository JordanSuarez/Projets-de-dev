export const GET_PROFILE = 'GET_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';

// Récupération d'un profil ayant un id précis
export const getProfileInfos = () => ({
  type: GET_PROFILE,
});

// Sauvegarde d'un profil ayant un id précis
export const saveProfile = (data) => ({
  type: SAVE_PROFILE,
  profile: { ...data[0] },
});
