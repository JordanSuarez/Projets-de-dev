export default ({ breakpoints, palette }) => ({
  containerChannels: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    width: '100vw',
    zIndex: '30',
    backgroundColor: '#313131',
    padding: '130px 0 0 0 ',
    color: palette.lightBlue,
    [breakpoints.up('md')]: {
      padding: '0 0 0 0 ',
      position: 'fixed',
      left: '0',
      top: '200px',
      width: '320px',
    },
    [breakpoints.up('lg')]: {
      width: '320px',
      top: '149px',
    },
  },
  closedListChannel: {
    zIndex: '30',
    color: palette.blue,
    position: 'fixed',
    top: '90px',
    right: '0',
    padding: '1em',
  },
  title: {
    padding: '1em 1em 1em 2em',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    [breakpoints.up('md')]: {
      justifyContent: 'center',
      backgroundColor: palette.blue,
    },
  },
  channelIcon: {
    margin: '0 1em 0 0',
  },
  channelsList: {
    margin: '0',
    width: '100vw',
    padding: '2em 0em 0em 1em',
    [breakpoints.up('md')]: {
      width: '320px',
    },
  },
  channelItem: {
    display: 'flex',
    padding: '1em',
    justifyContent: 'space-between',
    alignItems: ' center',
    [breakpoints.up('md')]: {
    },
  },
});
