// eslint-disable-next-line no-unused-vars
export default ({ breakpoints, palette }) => ({
  container: {
    maxWidth: '1400px',
    margin: '1em auto',
    padding: '1em 3em',
  },
  rowCenter: {
    padding: '1em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  subtitle: {
    padding: '1em 0',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },
  column: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    maxWidth: '70%',
    height: 'auto',
    margin: '0 1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [breakpoints.down(800)]: {
      maxWidth: '100%',
      margin: '0 auto',
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
    backgroundColor: palette.darkBlue,
    color: palette.yellow,
    margin: '1em',
    width: '200px',
  },
  cardContainer: {
    marginTop: '2rem',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    // '& .MuiPaper-root:nth-child(4n+1)': {
    //   backgroundColor: palette.darkBlue,
    // },
    // '& .MuiPaper-root:nth-child(4n+2)': {
    //   backgroundColor: palette.yellow,
    // },
    // '& .MuiPaper-root:nth-child(4n+3)': {
    //   backgroundColor: palette.errorField,
    // },
    // '& .MuiPaper-root:nth-child(4n+4)': {
    //   backgroundColor: palette.green,
    // },
  },
});
