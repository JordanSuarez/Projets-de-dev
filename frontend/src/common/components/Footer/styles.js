export default ({ breakpoints, palette }) => ({

  footer: {
    width: '100%',
    padding: '3em 0',
    backgroundColor: palette.darkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    lineHeight: '2em',
    [breakpoints.down('md')]: {
      padding: '1.4rem 0',
      flexDirection: 'column',
    },
    [breakpoints.between('xs', 'md')]: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    color: palette.white,
  },

  infos: {
    fontWeight: '400',
    fontSize: '1.5em',
    margin: '0 1em',
    padding: '0 2em 0 1em',
    [breakpoints.down('xs')]: {
      padding: '0.5em',
      margin: '0 auto',
    },
  },

  footerLinks: {
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

  icons: {
    fontSize: '1.8em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: '3em',
    '& i': {
      paddingLeft : '0.1em',
      color: '#F4F4F4',
    },
    [breakpoints.between('xs', 'md')]: {
      marginRight: '0',
    },

  }
});
