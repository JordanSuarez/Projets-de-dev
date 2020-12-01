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
  imageContainer: {
    marginBottom: '1rem',
  },
  imageTitle: {
    fontSize: '0.8rem',
    marginLeft: '0.7rem',
  },
  titleAutocomplete: {
    marginLeft: '1rem',
  },
  autoComplete: {
    margin: '1rem',
  },
  imageInput: {
    width: '5rem',
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
});
