// eslint-disable-next-line no-unused-vars
export default ({ palette, breakpoints }) => ({
  container: {
    maxWidth: '1400px',
    margin: '1em auto',
    padding: '1em 0',
  },
  subtitle: {
    padding: '1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },
  rowCenter: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [breakpoints.down(600)]: {
      margin: 'auto',
      padding: '0',
      width: '-webkit-fill-available',
    },
  },
  column: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [breakpoints.down(800)]: {
      justifyContent: 'center',
    },
  },
  username: {
    fontSize: '1.2em',
    margin: '1em 0',
    color: palette.darkBlue,
  },
  large: {
    width: '150px',
    height: '150px',
    boxShadow: ' 1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  containerBio: {
    width: 'auto',
    maxWidth: '40%',
    height: 'auto',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [breakpoints.down(800)]: {
      order: 3,
      maxWidth: '100%',
    },
  },
  bio: {
    wordBreak: 'break-word',
    padding: '2em',
    margin: '1em',
    backgroundColor: ' white',
    borderRadius: '16px',
  },
  button: {
    textTransform: 'initial',
    backgroundColor: palette.darkBlue,
    color: palette.white,
    margin: '1em',
    width: '200px',
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.darkBlue,
    },
  },
  deleteButton: {
    textTransform: 'initial',
    backgroundColor: palette.darkBlue,
    color: palette.white,
    margin: '1em',
    width: '200px',
    '&:hover': {
      color: palette.white,
      backgroundColor: palette.errorField,
    },
  },
  cardContainer: {
    marginTop: '2rem',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    // '& .MuiPaper-root:nth-child(1n)': {
    //   backgroundColor: palette.darkBlue,
    // },
  },
});
