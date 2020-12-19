export default ({ palette, breakpoints }) => ({
  projectContainer: {
    padding: '1rem',
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
    flexWrap: 'wrap',
    margin: '1rem',
    '& :nth-child(1n)': {
      color: palette.blue,
    },
    '& :nth-child(2n)': {
      color: palette.yellow,
    },
    '& :nth-child(3n)': {
      color: palette.green,
    },
    '& :nth-child(4n)': {
      color: palette.darkBlue,
    },
  },
  tag: {
    width: 'fit-content',
    margin: '0.5rem',
    color: palette.darkBlue,
    backgroundColor: palette.white,
    padding: '0.5rem',
    borderRadius: '8px',
    boxShadow: '1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  link: {
    '& a': {
      display: 'flex',
      alignItems: 'center',
      color: palette.darkBlue,
      '&:hover': {
        color: palette.blue,
      },
      '& img': {
        width: '1.5rem',
        marginRight: '0.5rem',
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
  linksGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2rem auto 0 auto',
    padding: 'O 2rem',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem',
    marginBottom: '0.5rem',
    color: palette.darkBlue,
  },
  profileLogo: {
    width: '3rem',
    height: '3rem',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
    boxShadow: ' 1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  profileText: {
    lineHeight: '1.3rem',
    display: 'flex',
    flexWrap: 'wrap',
    '& span': {
      marginRight: '0.5rem',
    },
  },
  iconButton: {
    display: 'flex',
    alignItems: 'flex-end',
    '& button': {
      color: palette.darkBlue,
      '&:hover': {
        color: palette.blue,
      },
    },
  },
  imageContainer: {
    margin: 'auto',
  },
  image: {
    width: '-webkit-fill-available',
    maxWidth: '50%',
    borderRadius: '8px',
    margin: '0.2rem auto',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '1px 2px 3px 1px rgba(0,0,0,.35)',
    [breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  description: {
    margin: 'auto',
  },
  quillEditor: {
    margin: '0',
    color: palette.darkBlue,
    '& .ql-editor': {
      fontSize: '1rem',
      padding: '1.5rem',
      backgroundColor: palette.white,
      border: 'none',
      borderRadius: '8px',
    },
    '& p': {
      display: 'content',
    },
    '& img': {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto',
      maxWidth: '30%',
    },
    '& iframe': {
      margin: 'auto',
    },
  },
});
