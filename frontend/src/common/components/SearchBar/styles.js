export default ({palette}) => ({
  searchBar: {
    width: '15rem',
    '& .MuiFormLabel-root.Mui-focused': {
      color: palette.darkBlue,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.darkBlue,
    },
  },
});
