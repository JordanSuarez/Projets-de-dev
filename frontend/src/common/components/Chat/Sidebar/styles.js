export default ({ breakpoints, palette }) => ({
  chatSidebar: {
    height: '100vh',
    width: '100vw',
    zIndex: '20',
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: palette.darkBlue,
    padding: '80px 3px 3px 3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: '80px 0 0 0',
    },
  },
});
