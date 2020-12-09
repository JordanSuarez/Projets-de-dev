export default ({ palette }) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& form': {
      margin: '1rem',
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

  },
  pagination: {
    width: '255px',
    margin: '1em auto',
  },

});
