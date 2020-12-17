export default ({ palette, breakpoints }) => ({

  home: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  image: {
    height: '400px',
    width: '100%',
    objectFit: 'cover',
  },

  subtitle: {
    padding: '0 0 1em 1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
    // [breakpoints.down('sm')]: {
    //   padding: '0',
    //   marginBottom: '1rem',
    // },
  },

  textContainer: {
    backgroundColor: palette.white,
    margin: '1rem',
    borderRadius: '1rem',
    padding: '1rem',
  },

  homeText: {
    fontSize: 'large',
    color: palette.darkBlue,
    margin: '0 1.5rem 1rem 1.5rem',
    [breakpoints.down('sm')]: {
      margin: '0',
    },
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

  presentation: {
    position: 'relative',
  },

  robot: {
    position: 'absolute',
    left: 0,
    top: 0,
  },

  title: {

  },

  descriptionSite: {

  },


});
