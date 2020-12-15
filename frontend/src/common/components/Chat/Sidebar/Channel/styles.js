export default ({ breakpoints, palette }) => ({
  listChannel: {
    overflowX: 'hidden',
    height: '200px',
    backgroundColor: 'white',
    overflowY: 'scroll',
    [breakpoints.up('md')]: {
      height: '100%',
    },
  },
});
