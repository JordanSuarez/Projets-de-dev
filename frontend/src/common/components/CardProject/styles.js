export default ({ palette }) => ({
  card: {
    maxWidth: '260px',
    margin: '1em',
    borderRadius: '16px',
  },
  image: {
    height: '200px',
  },
  text: {
    textAlign: 'center',
    marginBottom: '2em;',
    backgroundColor: palette.white,
  },
  title: {
    fontSize: '1.5em',
    paddingBottom: '0.5em',
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: palette.darkBlue,
    height: '70px',
  },
  like: {
    margin: '0.50em',
    color: palette.white,
  },
  avatar: {
    margin: '0.5em',
  },
  tags: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tag: {
    borderRadius: '8px',
    margin: '1em 10px 0 10px',
    backgroundColor: palette.yellow,
    padding: '0.5em',
    color: palette.darkBlue,
  },
});
