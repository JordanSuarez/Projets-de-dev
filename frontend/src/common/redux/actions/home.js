export const GET_LATEST_PROJECTS = 'GET_LATEST_PROJECTS';
export const SAVE_LATEST_PROJECTS = 'SAVE_LATEST_PROJECTS';

// Get all projects
export const getLatestProjects = (projectLimit, projectOffset) => ({
  type: GET_LATEST_PROJECTS,
  projectLimit,
  projectOffset,
});

// Sauve all projects
export const saveLastestProjects = (data) => ({
  type: SAVE_LATEST_PROJECTS,
  projects: { ...data },
});

