export default ({ palette }) => ({
  card: {
    width: '260px',
    margin: '60px 1em',
    borderRadius: '16px',
    position: 'relative',
    boxSizing: 'content-box',
    overflow: 'visible',
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
    borderRadius: '16px',
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
  linkProfile: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  follow: {
    fontSize: '30px',
  },
});
