export default ({ palette }) => ({
  card: {
    width: '260px',
    margin: '1em',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    height: '200px',
  },
  text: {
    textAlign: 'center',
    marginBottom: '1em;',
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
    marginTop: '0.7em',
  },
  tag: {
    borderRadius: '8px',
    margin: '1em 5px 0 0',
    backgroundColor: palette.yellow,
    padding: '0.5em',
    color: palette.darkBlue,
    fontSize: '0.85em',
  },
});
