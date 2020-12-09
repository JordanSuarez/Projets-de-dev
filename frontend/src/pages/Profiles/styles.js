export default ({ palette, breakpoints }) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  subtitle: {
    padding: '1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },
  listCard: {
    maxWidth: '1200px',
    margin: '3em auto',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
