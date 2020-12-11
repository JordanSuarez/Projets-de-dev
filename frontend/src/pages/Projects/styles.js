export default ({ palette, breakpoints }) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1rem',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  subtitle: {
    padding: '1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },
  listCard: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transition: 'all .2s ease-in-out',
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
  pagination: {
    width: '255px',
    margin: '1em auto',
    display: 'flex',
    justifyContent: 'center',
  },

});
