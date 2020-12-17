export default ({ breakpoints, palette }) => ({

  footer: {
    width: '100%',
    padding: '3em 0',
    backgroundColor: palette.darkBlue,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [breakpoints.down('xs')]: {
      padding: '1.4rem 0',
      flexDirection: 'column',
    },
    color: palette.white,
  },

  infos: {
    margin: '0 1em',
    padding: '0 2em 0 1em',
    [breakpoints.down('xs')]: {
      padding: '0.5em',
      margin: '0 auto',
    },
  },

  legalMention: {
    margin: '0 1em 0 2em',
    cursor: 'pointer',
    textAlign: 'end',
    padding: '0 1em',
    [breakpoints.down('xs')]: {
      padding: '0.5em',
      margin: '0 auto',
    },
    '&:hover': {
      color: palette.blue,
    },
  },

});
