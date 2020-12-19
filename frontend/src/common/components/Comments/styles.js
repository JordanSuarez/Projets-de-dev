export default ({ breakpoints, palette }) => ({
  commentSection: {
    margin: 'auto',
  },

  containerForm: {
    borderRadius: '8px',
    margin: '0.5em auto',
    maxWidth: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },

  formTitle: {
    color: palette.darkBlue,
    padding: '1.5em 1.5em 0 1.5em',
  },

  textfield: {
    width: 'calc(100% - 3em)',
    margin: '0.5em 1.5em 0 1.5em',
    '& .MuiFormLabel-root.Mui-focused': {
      color: palette.darkBlue,
    },
    '& .MuiInput-underline:after': {
      borderBottom: palette.darkBlue,
    },
  },

  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '1em 1.5em 0 1.5em',
  },

  submit: {
    textTransform: 'initial',
    marginBottom: '1.5em',
    color: palette.white,
    backgroundColor: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.darkBlue,
    },
  },

  containerPicker: {

  },

  picker: {
    color: '#bdbdbd',
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
    maxWidth: '100%',
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
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
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
    color: palette.darkBlue,
    backgroundColor: palette.lightBlue,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: palette.lightBlue,
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },

  deleteButton: {
    margin: '1rem 0 1rem 1rem',
    backgroundColor: palette.lightBlue,
    color: palette.darkBlue,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      color: palette.darkBlue,
      backgroundColor: palette.lightBlue,
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
      '& span': {
        color: palette.errorField,
      },
    },
  },

  date: {
    margin: '0.5em 0',
    fontSize: '0.9em',
  },

  containerFormUpdate: {
    position: 'relative',
  },

  pickerUpdate: {
    color: '#bdbdbd',
    position: 'absolute',
    top: '10px',
    right: '0px',
  },

  textfieldUpdate: {
    width: 'calc(100%)',
    margin: '0',
    '& .MuiFormLabel-root.Mui-focused': {
      color: palette.darkBlue,
    },
    '& .MuiInput-underline:after': {
      borderBottom: palette.darkBlue,
    },
  },

  commentText: {
    color: palette.darkBlue,
    margin: '1em auto 0.5em auto',
    wordBreak: 'break-word',
  },

  oldComment: {
    fontSize: '1.1em',
    padding: '0.5em 0',
  },

  noComment: {
    color: palette.darkBlue,
    margin: '0.5em auto',
    maxWidth: '100%',
    backgroundColor: 'white',
    padding: '1em',
    textAlign: 'center',
  },

});
