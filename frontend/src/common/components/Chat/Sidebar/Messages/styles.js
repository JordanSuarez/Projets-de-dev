export default ({ breakpoints, palette }) => ({
  chat: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '2px',
    margin: '0 auto'

  },
  alignRight:{
    display: 'flex',
    flexDirection: 'row-reverse',

  },
  alignRight:{

  },
  messages: {
    height: '180px',
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
});
