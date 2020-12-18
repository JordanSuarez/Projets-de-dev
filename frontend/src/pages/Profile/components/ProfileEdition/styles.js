// eslint-disable-next-line no-unused-vars
export default ({ palette }) => ({
  container: {
    padding: '3em 10px 1em 10px',
  },

  content: {
    margin: '0 auto',
    maxWidth: '400px',
    backgroundColor: palette.white,
    padding: '1em 1em',
  },

  formTitle: {
    fontSize: '1.3em',
    padding: '0.5em 0',
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

  containerButton: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  submit: {
    textTransform: 'initial',
    color: palette.white,
    backgroundColor: palette.darkBlue,
    margin: '2em 0',
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.darkBlue,
    },
  },
  annuler: {
    textTransform: 'initial',
    color: palette.darkBlue,
    backgroundColor: palette.lightBlue,
    margin: '2em 0 ',
    '&:hover': {
      color: palette.errorField,
      backgroundColor: palette.white,
    },
  },
  // Upload type
  imageContainer: {
    position: 'relative',
    marginBottom: '1rem',
    marginTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    backGroundColor: 'blue',
  },

  inputFile: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: '4px',
    paddingTop: '4px',
  },

  customUploadButton: {
    color: '#78797d',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    paddingTop: '4px',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  newButtonUpload: {
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: palette.darkBlue,
    fontSize: '12px',
    color: palette.white,
    margin: '1em 10px 1em 10px',
    width: '115px',
    textAlign: 'center',
  },
  fileName: {
    fontSize: '12px',
    width: 'auto',
    maxWidth: '190px',
    wordBreak: 'break-word',
  },
  imageTitle: {
    color: '#78797d',
    fontSize: '16px',
  },
  imageInput: {
    width: '12rem',
    margin: '1em auto',
    padding: '14px',
  },
  titleAutocomplete: {
    marginLeft: '1rem',
  },
});
