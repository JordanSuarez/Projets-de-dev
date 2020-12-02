export default ({ palette }) => ({
  about: {
    maxWidth: '1200px',
    margin: '0 auto',
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
    paddingTop: '30px',
  },

  image: {
    height: '300px',
    width: '100%',
    objectFit: 'cover',
  },

});
