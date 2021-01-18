export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// Add comment
export const addComment = (content) => ({
  type: ADD_COMMENT,
  content,
});

// Edit comment
export const editComment = (data, id) => ({
  type: EDIT_COMMENT,
  comments: { ...data },
  id,
});

// Delete comment
export const deleteComment = (data, id) => ({
  type: DELETE_COMMENT,
  comments: { ...data },
  id,
});
