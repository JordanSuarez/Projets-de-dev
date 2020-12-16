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

  alignRight: {
    display: 'flex',
    flexDirection: 'row-reverse',

  },

  alignRight: {

  },
  messages: {

    backgroundColor: 'white',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },

  message: {
    margin: '10px auto',
    borderRadius: '8px 8px 8px 0',
    backgroundColor: palette.blue,
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    position: 'relative',
  },

  myMessage: {
    margin: '10px auto',
    borderRadius: '8px 8px 0 8px',
    backgroundColor: palette.yellow,
    color: 'white',
    padding: '10px',
    textAlign: 'right',
    position: 'relative',
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
});
