// eslint-disable-next-line no-unused-vars
export default ({ palette, breakpoints }) => ({
  container: {
    maxWidth: '1400px',
    margin: '1em auto',
    padding: '1em 0',
  },
  toggleViewHeader: {
    order: 4,
    marginTop: '2rem',
    display: 'flex',
    width: '100%',
    borderBottom: 'solid 1px #bdbdbd',
    '& :first-child': {
      marginLeft: '2rem',
      [breakpoints.down(600)]: {
        marginLeft: '1rem',
      },
    },
    '& :last-child': {
      marginRight: '2rem',
      [breakpoints.down(600)]: {
        marginRight: '1rem',
      },
    },
  },
  title: {
    padding: '1rem',
    fontSize: '1.2rem',
    color: palette.darkBlue,
  },
  subtitle: {
    padding: '1rem',
    fontSize: '1.2rem',
    color: palette.darkBlue,
    '&:hover': {
      cursor: 'pointer',
    },
    [breakpoints.down(600)]: {
      fontSize: '1em',
    },
  },
  subtitleActive: {
    padding: '1rem',
    fontSize: '1.2rem',
    display: 'inline-block',
    position: 'relative',
    bottom: '-1px',
    backgroundColor: palette.lightBlue,
    border: 'solid 1px #bdbdbd',
    borderRadius: '20px 20px 0 0',
    borderBottom: 'none',
    fontWeight: 'bold',
    color: '#505050',
    '&:hover': {
      cursor: 'pointer',
    },
    [breakpoints.down(600)]: {
      fontSize: '1em',
    },
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
  },
});
