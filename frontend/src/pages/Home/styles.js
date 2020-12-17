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
    padding: '0 0 1em 0',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },

  subtitleProjects: {
    padding: '1rem 0 1em 1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
  },

  textContainer: {
    backgroundColor: palette.white,
    margin: '1rem',
    borderRadius: '1rem',
    padding: '1rem',
    [breakpoints.up('md')]: {
      padding: '2rem',
    },
  },

  homeText: {
    fontSize: 'large',
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
