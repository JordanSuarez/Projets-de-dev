export default ({ breakpoints, palette }) => ({
  containerUsers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 'calc(100vh - 80px)',

    [breakpoints.up('md')]: {

    },
  },

  user: {
    display: 'flex',
    flexDirection: 'row',
  },

  userImage: {
    margin : '0 auto',

  },

});
