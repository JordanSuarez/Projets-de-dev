export const FETCH_PROJECT_BY_ID = 'FETCH_PROJECT_BY_ID';
export const SHOW_PROJECT_BY_ID = 'SHOW_PROJECT_BY_ID';
export const HANDLE_CREATE_PROJECT = 'HANDLE_CREATE_PROJECT';
export const HANDLE_EDIT_PROJECT = 'HANDLE_EDIT_PROJECT';
export const REDIRECT_SUCCESS = 'REDIRECT_SUCCESS';

export const fetchProjectById = (projectId) => ({
  type: FETCH_PROJECT_BY_ID,
  projectId,
});

export const showProjectById = (project) => ({
  type: SHOW_PROJECT_BY_ID,
  project,
});

export const handleCreateProject = (formProjectValues) => ({
  type: HANDLE_CREATE_PROJECT,
  formProjectValues,
});

export const handleEditProject = (formProjectValues) => ({
  type: HANDLE_EDIT_PROJECT,
  formProjectValues,
});

// export const redirectSuccess = (redirect) => ({
//   type: REDIRECT_SUCCESS,
//   redirect,
// });
