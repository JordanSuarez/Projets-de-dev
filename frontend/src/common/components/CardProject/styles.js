export default ({ breakpoints, palette }) => ({
  card: {
    width: '240px',
    transition: 'all .2s ease-in-out',
    [breakpoints.up('sm')]: {
      width: '300px',
    },
    margin: '1em',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      transition: '.2s ease-in-out',
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },

  image: {
    height: '200px',
  },

  contentCard: {
    height: '100% !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    textAlign: 'center',
    backgroundColor: palette.white,
  },

  title: {
    fontSize: '1.5em',
    paddingBottom: '0.5em',
    color: palette.darkBlue,
    wordBreak: 'break-all',
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: palette.darkBlue,
    height: '70px',
  },
  linkLogout: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: palette.darkBlue,
    height: '70px',
  },
  like: {
    margin: '0.50em',
    color: 'red',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  dontLike: {
    margin: '0.50em',
    color: palette.white,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  vote: {
    color: 'white',
  },
  editIcon: {
    margin: '0.50em',
    color: palette.darkBlue,
    backgroundColor: palette.white,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      color: palette.blue,
      backgroundColor: palette.white,
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  deleteIcon: {
    margin: '0.50em',
    color: palette.darkBlue,
    backgroundColor: palette.white,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      color: palette.darkBlue,
      backgroundColor: palette.white,
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
      '& span': {
        color: palette.errorField,
      },
    },
  },

  avatar: {
    margin: '0.5em',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  tags: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: ' wrap-reverse',
    marginTop: '0.7em',
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
      color: palette.errorField,
    },
  },
  tag: {
    borderRadius: '8px',
    margin: '1em 5px 0 0',
    backgroundColor: palette.darkBlue,
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
