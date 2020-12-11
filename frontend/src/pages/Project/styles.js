export default ({ palette }) => ({
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
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0.5rem',
    color: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
      cursor: 'pointer',
    },
  },
  profileLogo: {
    width: '3rem',
    height: '3rem',
    marginBottom: '0.5rem',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
    boxShadow: ' 1px 2px 3px 1px rgba(0,0,0,.35)',
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
    maxWidth: 'inherit',
    borderRadius: '1rem',
    margin: '0.2rem auto',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  description: {
    margin: 'auto',
  },
  quillEditor: {
    color: palette.darkBlue,
    '& .ql-editor': {
      backgroundColor: palette.lightBlue,
      border: 'none',
    },
    '& p': {
      display: 'content',
    },
    '& img': {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto',
      width: '50%',
      maxWidth: 'fit-content',
    },
    '& iframe': {
      margin: 'auto',
    },
  },
});
