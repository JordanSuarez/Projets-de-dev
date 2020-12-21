// eslint-disable-next-line no-unused-vars
export default ({ palette }) => ({
  container: {
    padding: '3em 10px 1em 10px',
  },

  content: {
    margin: '0 auto',
    maxWidth: '400px',
    backgroundColor: palette.white,
    padding: '1.5em 1.5em',
  },

  formTitle: {
    fontSize: '1.3em',
    padding: '0.5em 0',
    color: palette.darkBlue,
  },

  textfield: {
    marginBottom: '0.5em',
    '& .MuiFormLabel-root.Mui-focused': {
      color: palette.darkBlue,
    },
    '& .MuiInput-underline:after': {
      borderColor: palette.darkBlue,
    },
  },

  submit: {
    textTransform: 'initial',
    backgroundColor: palette.darkBlue,
    color: palette.white,
    margin: '2em 0 2em auto',
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.darkBlue,
    },
  },

  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  login: {
    textAlign: 'right',
    color: palette.darkBlue,
  },

  image: {
    height: '400px',
    width: '100%',
    objectFit: 'cover',
  },

});
