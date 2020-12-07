export const GET_PROJECTS = 'GET_PROJECTS';
export const SAVE_PROJECTS = 'SAVE_PROJECTS';

// Récuperation de tout les projets
export const getProjectsInfos = () => ({
  type: GET_PROJECTS,
});

// Sauvegarde de tout les projets
export const saveProjects = (data) => ({
  type: SAVE_PROJECTS,
  projects: { ...data },
});
