export default ({ breakpoints, palette }) => ({
  card: {
    width: '260px',
    [breakpoints.up('sm')]: {
      width: '340px',
    },
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
    color: palette.darkBlue,

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
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  avatar: {
    margin: '0.5em',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
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
  description: {
    color: palette.darkBlue,
    textAlign: 'start',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '6.6em',
    lineHeight: '1.8em',
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
    // '& p': {
    //   overflowWrap: 'break-word',
    // },
  },
});
