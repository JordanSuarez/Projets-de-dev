export const GET_PROJECTS = 'GET_PROJECTS_CURRENT_PAGE';
export const SAVE_PROJECTS_CURRENT_PAGE = 'SAVE_PROJECTS_CURRENT_PAGE';
export const SAVE_ALL_PROJECTS = 'SAVE_ALL_PROJECTS';
export const ADD_LIKE = 'ADD_LIKE';
export const ADD_DISLIKE = 'ADD_DISLIKE';
export const CLEAR_PROJECTS_STATE = 'CLEAR_PROJECTS_STATE';

// Get all projects
export const getProjectsInfos = (projectLimit, projectOffset) => ({
  type: GET_PROJECTS,
  projectLimit,
  projectOffset,
});

// Save all projects
export const saveProjectsCurrentPage = (data) => ({
  type: SAVE_PROJECTS_CURRENT_PAGE,
  projects: { ...data },
});

// save the number of projects for pagination & searchbar
export const saveAllProjects = (data) => ({
  type: SAVE_ALL_PROJECTS,
  projects: { ...data },
});

// add like on project
export const addLike = (projectId) => ({
  type: ADD_LIKE,
  projectId,
});

// dislike project
export const addDislike = (projectId) => ({
  type: ADD_DISLIKE,
  projectId,
});

// Clear le state de la page projects
export const clearProjectsState = () => ({
  type: CLEAR_PROJECTS_STATE,
});
