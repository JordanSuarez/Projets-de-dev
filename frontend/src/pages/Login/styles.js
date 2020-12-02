// eslint-disable-next-line no-unused-vars
export default ({ palette }) => ({
  container: {
    padding: '3em 10px 0 10px',
  },

  content: {
    margin: '0 auto',
    maxWidth: '400px',
    backgroundColor: palette.white,
    padding: '3em 2em',
  },

  formTitle: {
    fontSize: '1.3em',
    padding: '0.5em 0',
  },

  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  inscription: {
    textAlign: 'right',
    color: palette.darkBlue,
  },

  submit: {
    backgroundColor: palette.darkBlue,
    color: palette.yellow,
    margin: '2em 0 2em auto',
  },
});
