export const FETCH_PROJECT_BY_ID = 'FETCH_PROJECT_BY_ID';
export const SHOW_PROJECT_BY_ID = 'SHOW_PROJECT_BY_ID';
export const HANDLE_CREATE_PROJECT = 'HANDLE_CREATE_PROJECT';
export const HANDLE_EDIT_PROJECT = 'HANDLE_EDIT_PROJECT';
export const HANDLE_DELETE_PROJECT = 'HANDLE_DELETE_PROJECT';
export const FETCH_PROJECT_TAGS = 'FETCH_PROJECT_TAGS';

export const fetchProjectById = (projectId) => ({
  type: FETCH_PROJECT_BY_ID,
  projectId,
});

export const showProjectById = (project, tags) => ({
  type: SHOW_PROJECT_BY_ID,
  project,
  tags,
});

export const handleCreateProject = (formProjectValues) => ({
  type: HANDLE_CREATE_PROJECT,
  formProjectValues,
});

export const handleEditProject = (formProjectValues) => ({
  type: HANDLE_EDIT_PROJECT,
  formProjectValues,
});

export const handleDeleteProject = (id) => ({
  type: HANDLE_DELETE_PROJECT,
  id,
});

export const fetchProjectTags = () => ({
  type: FETCH_PROJECT_TAGS,
});
