export const GET_LATEST_PROJECTS = 'GET_LATEST_PROJECTS';
export const SAVE_LATEST_PROJECTS = 'SAVE_LATEST_PROJECTS';

// Récuperation de tout les projets
export const getLatestProjects = () => ({
  type: GET_LATEST_PROJECTS,
});

// Sauvegarde de tout les projets
export const saveLastestProjects = (data) => ({
  type: SAVE_LATEST_PROJECTS,
  projects: { ...data },
});
