// eslint-disable-next-line no-unused-vars
export default ({ palette }) => ({
  container: {
    padding: '3em 10px 1em 10px',
  },

  content: {
    margin: '0 auto',
    maxWidth: '400px',
    backgroundColor: palette.white,
    padding: '1.5em 1.5em',
  },

  formTitle: {
    fontSize: '1.3em',
    padding: '0.5em 0',
  },

  textfield: {
    marginBottom: '0.5em',
  },

  submit: {
    backgroundColor: palette.darkBlue,
    color: palette.yellow,
    margin: '2em 0 2em auto',
  },

  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  login: {
    textAlign: 'right',
    color: palette.darkBlue,
  },

});
