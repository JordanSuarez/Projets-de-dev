export default ({ palette }) => ({
  card: {
    width: '260px',
    margin: '60px 1em',
    borderRadius: '32px',
    position: 'relative',
    boxSizing: 'content-box',
    overflow: 'visible',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  cardArea: {
    borderRadius: '32px',
  },
  large: {
    position: 'absolute',
    top: '-65px',
    left: '58px',
    width: '150px',
    height: '150px',
    margin: '0 auto',
    boxShadow: ' 1px 2px 3px 1px rgba(0,0,0,.35)',
  },
  text: {
    textAlign: 'center',
    marginBottom: '0.5em;',
    backgroundColor: palette.white,
    borderRadius: '32px',
  },
  title: {
    fontSize: '1.5em',
    paddingBottom: '0.5em',
    paddingTop: '85px',
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: palette.darkBlue,
    height: '70px',
    borderRadius: '0 0 16px 16px',
    color: palette.white,
    padding: '0 1em',
  },
  linkLogout: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: palette.darkBlue,
    height: '70px',
    borderRadius: '0 0 16px 16px',
    color: palette.white,
    padding: '0 1em',
  },
  linkProfile: {
    '&:hover': {
      cursor: 'pointer',
      color: palette.blue,
    },
  },
  follow: {
    fontSize: '30px',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.2)',
    },
  },
});
