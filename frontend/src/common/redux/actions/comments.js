export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// Ajout d'un commentaire
export const addComment = (content) => ({
  type: ADD_COMMENT,
  content,
});

// Edition d'un commentaire
export const editComment = (data, id) => ({
  type: EDIT_COMMENT,
  comments: { ...data },
  id,
});

// Suppresion d'un commentaire
export const deleteComment = (data, id) => ({
  type: DELETE_COMMENT,
  comments: { ...data },
  id,
});
