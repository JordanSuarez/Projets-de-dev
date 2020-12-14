export default ({ breakpoints, palette }) => ({
  chat: {
    height: '100%',
  },

  messages: {
    overflowX: 'scroll',
    height: '150px',
    backgroundColor: 'white',
  },

  message: {
    width: '80%',
    margin: '10px auto',
    borderRadius: '8px',
    backgroundColor: palette.blue,
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    position: 'relative',
    '&::before': {
      display: 'block',
      content: '" "', // important '" "'
      width: '0px',
      height: '0px',
      position: 'absolute',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid #59b0df',
      borderTop: '10px solid #59b0df',
      borderBottom: '10px solid transparent',
      left: '-10px',
      top: '0px',
    },
  },

  myMessage: {
    width: '80%',
    margin: '10px auto',
    borderRadius: '8px',
    backgroundColor: palette.yellow,
    color: 'white',
    padding: '10px',
    textAlign: 'right',
    position: 'relative',
    '&:before': {
      content: '" "', // important '" "'
      width: '0px',
      height: '0px',
      position: 'absolute',
      borderLeft: '10px solid #E2CB57',
      borderRight: '10px solid transparent',
      borderTop: '10px solid #E2CB57',
      borderBottom: '10px solid transparent',
      right: '-10px',
      top: '0px',
    },
  },


  
  

});
