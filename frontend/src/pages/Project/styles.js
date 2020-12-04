export default ({ palette }) => ({
  body: {
    padding: '2rem',
  },
  subtitle: {
    padding: '1em',
    fontSize: '1.5em',
    color: palette.darkBlue,
    textAlign: 'center',
  },
  tagsContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
  tag: {
    width: 'fit-content',
    margin: '0.5rem',
    color: palette.darkBlue,
    backgroundColor: palette.yellow,
    padding: '0.5rem',
    borderRadius: '0.4rem',
    boxShadow: '1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  image: {
    width: '92%',
    borderRadius: '1rem',
    margin: '0.2rem auto',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  linkContainer: {
    color: palette.darkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0rem',
    padding: '1.5rem 3rem 0 3rem',
  },

  linkGrid: {
    display: 'flex',
    alignSelf: 'center',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.6rem',
    '& a': {
      marginBottom: '1.2rem',
      color: palette.darkBlue,
      '&:hover': {
        color: palette.blue,
      },
    },
  },
  logo: {
    width: '2rem',
    borderRadius: '50%',
    boxShadow: '1px 2px 3px 1px rgba(0,0,0,.35)',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  profileGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0.5rem',
    color: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
    },

  },
  profileLogo: {
    width: '5rem',
    height: '5rem',
    marginBottom: '0.5rem',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
    boxShadow: ' 1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  description: {
    margin: '0 1.5rem',
    color: palette.darkBlue,
  },
});
