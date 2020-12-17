export default ({ breakpoints, palette }) => ({
  showProfileMobile: {
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
    justifyContent: 'center',
    height: 'calc(100vh - 200px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    margin: '1em auto',
    padding: '10em 0 0 0 ',

    [breakpoints.up('md')]: {

    },
  },

  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    height: 'calc(100vh - 80px)',
    wordBreak: ' break-word',
  },

  listUserImage: {
    margin: '0 auto',
  },

  listUsername: {
    padding: '0 0 0 1em',
  },

});
