export const GET_PROJECTS = 'GET_PROJECTS_CURRENT_PAGE';
export const SAVE_PROJECTS_CURRENT_PAGE = 'SAVE_PROJECTS_CURRENT_PAGE';
export const SAVE_ALL_PROJECTS = 'SAVE_ALL_PROJECTS';

// Récuperation de tout les projets
export const getProjectsInfos = (projectLimit, projectOffset) => ({
  type: GET_PROJECTS,
  projectLimit,
  projectOffset,
});

// Sauvegarde de tout les projets
export const saveProjectsCurrentPage = (data) => ({
  type: SAVE_PROJECTS_CURRENT_PAGE,
  projects: { ...data },
});

// Sauvegarde le nombre de projets (pour la pagination)
export const saveAllProjects = (data) => ({
  type: SAVE_ALL_PROJECTS,
  projects: { ...data },
});
