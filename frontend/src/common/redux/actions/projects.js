export const GET_PROJECTS = 'GET_PROJECTS';
export const SAVE_PROJECTS = 'SAVE_PROJECTS';
export const GET_PROJECTS_NUMBER = 'GET_PROJECTS_NUMBER';
export const SAVE_PROJECTS_NUMBER = 'SAVE_PROJECTS_NUMBER';

// Récuperation de tout les projets
export const getProjectsInfos = (projectLimit, projectOffset) => ({
  type: GET_PROJECTS,
  projectLimit,
  projectOffset,
});

// Sauvegarde de tout les projets
export const saveProjects = (data) => ({
  type: SAVE_PROJECTS,
  projects: { ...data },
});

// Sauvegarde de tout les projets
export const saveProjectsNumber = (data) => ({
  type: SAVE_PROJECTS_NUMBER,
  projects: { ...data },
});
