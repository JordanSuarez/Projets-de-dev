export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// Ajout d'un commentaire
export const addComment = () => ({
  type: ADD_COMMENT,

});

// Edition d'un commentaire
export const editComment = (data) => ({
  type: EDIT_COMMENT,
  comments: { ...data },
});

// Suppresion d'un commentaire
export const deleteComment = (data) => ({
  type: DELETE_COMMENT,
  comments: { ...data },
});
