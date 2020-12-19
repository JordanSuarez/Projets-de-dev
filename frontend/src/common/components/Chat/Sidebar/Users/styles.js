export default ({ breakpoints, palette }) => ({

  users: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: 'auto',
    width: '100vw',
    zIndex: '30',
    backgroundColor: palette.lightBlue,
    padding: '80px 0 0 0 ',
  },
  showProfileMobile: {
    zIndex: '30',
    backgroundColor: 'yellow',
    position: 'fixed',
    right: '0',
    padding: '1em',
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },

  listTitle:{
    padding: '2em 0 0 0',
  },

  containerUsers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 'calc(100vh - 80px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    margin: '1em auto',
    padding: '1em 0 0 0 ',

    [breakpoints.up('md')]: {

    },
  },

  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '5px',
    wordBreak: ' break-word',
  },

  listUserImage: {
    margin: '0 auto',
  },

  listUsername: {
    padding: '0 0 0 1em',
  },

});
