import React from 'react';

import { array, func, string } from 'prop-types';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { classes as classesProps } from 'src/common/classes';

const SearchBar = ({
  onInputChange, classes, items, helperText, label,
}) => (
  <Autocomplete
    className={classes.searchBar}
    freeSolo
    clearOnEscape
    options={items.map((option) => option.title || option.username)}
    onInputChange={onInputChange}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        margin="normal"
        variant="outlined"
        helperText={helperText}
      />
    )}
  />
);

SearchBar.propTypes = {
  onInputChange: func.isRequired,
  onSubmit: func.isRequired,
  label: string.isRequired,
  items: array.isRequired,
  helperText: string,
  ...classesProps,
};

SearchBar.defaultProps = {
  helperText: '',
};

export default SearchBar;
