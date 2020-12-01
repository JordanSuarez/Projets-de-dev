export default ({ palette }) => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },

  input: {
    marginLeft: '1rem',
    flex: 1,
    '& .MuiOutlinedInput-adornedEnd': {
      backgroundColor: palette.lightBlue,
    },
    '& fieldset': {
      borderColor: palette.darkBlue,
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  iconButton: {
    padding: 10,
  },
});
