export default ({ palette }) => ({
  container: {
    padding: '3em 10px 0 10px',
  },
  content: {
    margin: '0 auto',
    maxWidth: '400px',
    backgroundColor: palette.white,
    padding: '3em 2em',
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
    '& .MuiInput-underline': {
      borderBottom: palette.green,
    },
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  inscription: {
    textAlign: 'right',
    color: palette.darkBlue,
    '& span': {
      '&:hover': {
        cursor: 'pointer',
        color: palette.blue,
      },
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
  error: {
    color: palette.errorField,
  },
});
