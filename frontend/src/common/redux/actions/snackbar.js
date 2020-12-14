export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

export const showSnackbar = (title, content, severity) => ({
  type: SHOW_SNACKBAR,
  title,
  content,
  severity,
});

export const hideSnackbar = () => ({
  type: HIDE_SNACKBAR,
});
