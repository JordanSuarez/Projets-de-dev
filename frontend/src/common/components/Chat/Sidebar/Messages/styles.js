export default ({ breakpoints, palette }) => ({
  chat: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 'calc(100vh - 80px)',
    padding: '3em 0 1em 0',
    backgroundColor: palette.darkBlue,
    color: palette.lightBlue,
    [breakpoints.up('md')]: {
      width: 'calc(100vw - 335px)',
      padding: '0',
      margin: '0 0 0 335px',
    },
    [breakpoints.up('lg')]: {
      width: 'calc(100vw - 300px - 300px )',
    },
  },

  channelTitleContainer: {
    padding: '1em',
    borderBottom: 'solid 1px #59B0DF',
  },

  channelTitleSelected: {
    display: 'inline-block',
    position: 'relative',
    padding: '1em',
    bottom: '-17px',
    backgroundColor: palette.darkBlue,
    border: 'solid 1px #59B0DF',
    borderRadius: '20px 20px 0 0',
    borderBottom: 'none',
    fontSize: '0.75em',
    fontWeight: 'bold',
    color: palette.blue,
  },

  messages: {
    overflowX: 'hidden',
    overflowY: 'scroll',
    [breakpoints.up('md')]: {
      padding: '0 1em',
    },

  },

  alignRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    margin: '30px 0',
    textAlign: 'right',
  },

  alignLeft: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    margin: '30px 0',
  },

  message: {
    display: 'inline-block',
    margin: '3px 10px 3px 0',
    minWidth: '130px',
    borderRadius: '0px 8px 8px 8px',
    backgroundColor: palette.yellow,
    color: palette.darkBlue,
    padding: '10px',
    textAlign: 'left',
    position: 'relative',
    wordBreak: 'break-word',
  },

  myMessage: {
    margin: '3px 0 3px 0',
    minWidth: '130px',
    display: 'inline-block',
    borderRadius: '8px 0px 8px 8px',
    backgroundColor: palette.blue,
    color: 'white',
    padding: '10px',
    textAlign: 'right',
    position: 'relative',
    wordBreak: 'break-word',
  },

  avatar: {
    margin: '-6px 5px 10px 5px',
    width: '50px',
    height: '50px',
  },

  date: {
    fontSize: '10px',
    padding: '0 10px',
  },

  form: {
    width: '100%',
    display: 'flex',
  },

  inputMessage: {
    width: 'calc(100% - 6px)',
    padding: '8px',
    margin: '10px ',
    borderRadius: '25px',
    border: 'none',
    outline: 'none',
    color: palette.lightBlue,
    boxShadow: 'inset 8px 8px 8px #3c3c3c, inset -8px -8px 8px #4e4e4e;',
    '&:before': {
      borderBottom: 'none',

    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',

    },
    '&:after': {
      borderBottom: 'none',
    },
  },

  picker: {
    color: palette.blue,
    margin: '0 10px 0 0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  submitButton: {
    color: palette.blue,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },


});
