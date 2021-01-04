export const GET_LATEST_PROJECTS = 'GET_LATEST_PROJECTS';
export const SAVE_LATEST_PROJECTS = 'SAVE_LATEST_PROJECTS';
export const CLEAR_HOME_STATE = 'CLEAR_HOME_STATE';

// Récuperation de tout les projets
export const getLatestProjects = (projectLimit, projectOffset) => ({
  type: GET_LATEST_PROJECTS,
  projectLimit,
  projectOffset,
});

// Sauvegarde de tout les projets
export const saveLastestProjects = (data) => ({
  type: SAVE_LATEST_PROJECTS,
  projects: { ...data },
});

// Clear le state de la page home
export const clearHomeState = () => ({
  type: CLEAR_HOME_STATE,
});
