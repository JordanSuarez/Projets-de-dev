export default ({ palette }) => ({
  subtitle: {
    padding: '1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  leftContainer: {
    marginLeft: '1rem',
    '& > *': {
      marginTop: '1rem',
    },
  },
  rightContainer: {
    marginRight: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '45rem',
  },
  // Upload type
  imageContainer: {
    position: 'relative',
    marginBottom: '1rem',
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
  buttonsWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
  submitButton: {
    margin: '4rem 1.3rem 3rem 2rem',
    color: palette.yellow,
    backgroundColor: palette.darkBlue,
    '&:hover': {
      backgroundColor: palette.blue,
    },
  },
  quitButton: {
    margin: '4rem 1.3rem 3rem 2rem',
    color: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.white,
    },
  },
  editor: {
    margin: '1rem',
    width: '100%',
  },
  errorEditor: {
    marginTop: '3rem',
    marginLeft: '2rem',
    color: palette.errorField,
  },
  errorTagsChecked: {
    color: palette.errorField,
  },
  errorImage: {
    color: palette.errorField,
    margin: '0.5em',
  },
});
