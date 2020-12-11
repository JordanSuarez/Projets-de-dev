export const REDIRECT = 'REDIRECT';
export const REDIRECT_SUCCESS = 'REDIRECT_SUCCESS';

export const redirect = (redirection) => ({
  type: REDIRECT,
  redirection,
});

export const redirectSuccess = () => ({
  type: REDIRECT_SUCCESS,
});
