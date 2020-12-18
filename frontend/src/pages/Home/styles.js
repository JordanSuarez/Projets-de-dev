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

  containerPresentation: {
    margin: '1em',
  },

  presentation: {
    maxWidth: '600px',
    backgroundColor: palette.white,
    position: 'relative',
    margin: '8em auto 2em auto ',
    padding: '5em 1em 1em 1em',
    textAlign: 'center',
    borderRadius: '1rem',
    [breakpoints.up('md')]: {
      margin: '8em auto 2em auto ',
      padding: '2em 1em 1em 9em',
      textAlign: 'left',
    },
    [breakpoints.up('lg')]: {
      maxWidth: '800px',

    },
  },

  robot: {
    position: 'absolute',
    left: 'calc(50% - 100px)',
    top: '-120px',
    width: '200px',
    [breakpoints.up('md')]: {
      width: '300px',
      left: '-150px',
      top: '-10px',
    },
    [breakpoints.up('lg')]: {
      top: '-30px',
    },
  },

  title: {
    fontSize: '1.8em',
    paddingBottom: '1em',
    [breakpoints.up('md')]: {
      paddingLeft: '14px',
    },
  },

  descriptionSite: {
    textAlign: 'left',
    [breakpoints.up('md')]: {
      padding: '0 1em 1em 1em',
    },
  },


});
