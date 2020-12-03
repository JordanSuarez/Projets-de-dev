export const FETCH_PROJECT_BY_ID = 'FETCH_PROJECT_BY_ID';
export const SHOW_PROJECT_BY_ID = 'SHOW_PROJECT_BY_ID';

export const fetchProjectById = (projectId) => ({
  type: FETCH_PROJECT_BY_ID,
  projectId,
});

export const showProjectById = (project) => ({
  type: SHOW_PROJECT_BY_ID,
  project,
});
