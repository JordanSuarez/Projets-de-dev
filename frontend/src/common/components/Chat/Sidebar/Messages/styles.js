export default ({ breakpoints, palette }) => ({
  chat: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 'calc(100vh - 80px)',
    padding: '3em 0 1em 0',
    [breakpoints.up('md')]: {
      width: '80vw',
      padding: '3em 1em 1em 1em',
    },
  },

  channelTitleContainer: {
    padding: '1em',
    borderBottom: 'solid 1px #bdbdbd',
  },

  channelTitleSelected: {
    display: 'inline-block',
    position: 'relative',
    padding: '1em',
    bottom: '-17px',
    backgroundColor: palette.lightBlue,
    border: 'solid 1px #bdbdbd',
    borderRadius: '20px 20px 0 0',
    borderBottom: 'none',
    fontSize: '0.75em',
    fontWeight: 'bold',
    color: '#505050',
  },

  messages: {
    backgroundColor: palette.lightBlue,
    overflowX: 'hidden',
    overflowY: 'scroll',
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
    backgroundColor: palette.darkBlue,
    color: 'white',
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
    margin: '10px 3px',
    borderRadius: '25px',
    border: 'none',
    outline: 'none',
    boxShadow: 'inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff',
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
    color: '#bdbdbd',
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
