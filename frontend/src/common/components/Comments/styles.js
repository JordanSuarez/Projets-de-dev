export default ({ breakpoints, palette }) => ({
  containerForm: {
    margin: '0.5em auto',
    maxWidth: '1200px',
    position: 'relative',
    backgroundColor: 'white',
  },

  formTitle: {
    padding: '1.5em 1.5em 0 1.5em',
  },

  textfield: {
    width: 'calc(100% - 3em)',
    margin: '0.5em 1.5em 0 1.5em',
  },

  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '1em 1.5em 0 1.5em',
  },

  submit: {
    marginBottom: '1.5em',
  },

  containerPicker: {
    width: '100px !important',
  },

  picker: {
    position: 'absolute',
    right: '0.5em',
    top: '60px',
  },

  noLogged: {
    textAlign: 'center',
    padding: '1em',
  },

  comment: {
    margin: '0.5em auto',
    maxWidth: '1200px',
    backgroundColor: 'white',
    padding: ' 1em',
    borderRadius: '8px',
  },
  infos: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  avatar: {
    margin: '0 auto',
  },

  headerComment: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0 1em',
    [breakpoints.down('xs')]: {
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },

  usernameContent: {
    display: 'flex',
    alignItems: ' center',
    justifyContent: 'center',
  },

  username: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1.3em',
    margin: '0.5em',
  },

  rightHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },

  editButton: {
    backgroundColor: palette.lightBlue,
  },

  date: {
    margin: '0.5em 0',
    fontSize: '0.9em',
  },

  containerFormUpdate: {
    position: 'relative',
  },

  pickerUpdate: {
    position: 'absolute',
    top: '10px',
    right: '0px',
  },

  textfieldUpdate: {
    width: 'calc(100%)',
    margin: '0',
  },

  commentText: {
    margin: '1em auto 0.5em auto',
    wordBreak: 'break-word',
  },

  oldComment: {
    fontSize: '1.1em',
    padding: '0.5em 0',
  },

  noComment: {
    margin: '0.5em auto',
    maxWidth: '1200px',
    backgroundColor: 'white',
    padding: '1em',
    textAlign: 'center',
  },

});
