export default ({ palette }) => ({
  container: {
    margin: 'auto',
    padding: '1rem',
  },
  subtitle: {
    padding: '1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },
  inputContainer: {
    margin: '1rem',
  },
  input: {
    marginBottom: '1rem',
  },
  // Upload type
  imageContainer: {
    position: 'relative',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  inputFile: {
    position: 'relative',
    color: '#78797d',
    border: '#bcbdc4 1px solid',
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
  },
  newButtonUpload: {
    zIndex: '-1',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: palette.darkBlue,
    fontSize: '12px',
    color: palette.yellow,
    margin: '1em 10px 1em 10px',
    width: '115px',
  },
  fileName: {
    fontSize: '12px',
    width: '90px',
    wordBreak: 'break-word',
  },
  imageTitle: {
    position: 'absolute',
    zIndex: '3',
    top: '-5px',
    padding: '0 6px 0 4px',
    color: '#78797d',
    fontSize: '0.8rem',
    marginLeft: '0.7rem',
    backgroundColor: palette.lightBlue,
  },
  imageInput: {
    width: '12rem',
    margin: '1em auto',
    padding: '14px',
  },
  titleAutocomplete: {
    marginLeft: '1rem',
  },
  autoComplete: {
    margin: '1rem',
  },
  // Submit and Quit buttons
  buttonsWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  submitButton: {
    margin: '1rem 1.3rem 1rem 2rem',
    color: palette.yellow,
    backgroundColor: palette.darkBlue,
    '&:hover': {
      backgroundColor: palette.blue,
    },
  },
  quitButton: {
    margin: '1rem 1.3rem 1rem 2rem',
    color: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.white,
    },
  },
  // Quill editor
  editorContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  editor: {
    margin: '1rem',
    width: '100%',
    height: 'fit-content',
    '& img': {
      width: '50%',
    },
    '& iframe': {
      margin: 'auto',
    },
  },
  // Errors message
  errorEditor: {
    marginTop: '3rem',
    marginLeft: '2rem',
    color: palette.errorField,
  },
  errorTags: {
    color: palette.errorField,
    marginLeft: '1.5rem',
  },
  errorFields: {
    color: palette.errorField,
    textAlign: 'end',
    marginRight: '2rem',
  },
  errorImage: {
    color: palette.errorField,
    margin: '0.5em',
  },
});
