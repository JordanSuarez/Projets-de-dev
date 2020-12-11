export default ({ breakpoints, palette }) => ({
  containerForm: {
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

  comment: {
    margin: '0.5em auto',
    maxWidth: '1200px',
    backgroundColor: 'white',
    padding: ' 1em',
    borderRadius: '8px',
  },

  infosUser: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {

  },

  infos: {
    width: '90%',
    margin: ' 0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  username: {
    fontWeight: '600',
    fontSize: '1.3em',
    margin: '0.5em',
  },

  date: {
    margin: '0.5em 0',
    fontSize: '0.9em',
  },


  commentText: {
    margin: '1em auto 0.5em auto',
  },
});
