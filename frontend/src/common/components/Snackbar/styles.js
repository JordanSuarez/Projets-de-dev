export default () => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: '2rem',
    },
  },
  toast: {
    padding: '0px 2px 2px',
  },
});
