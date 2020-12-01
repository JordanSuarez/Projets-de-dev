import React from 'react';

import { func, string } from 'prop-types';
import { IconButton, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { classes as classesProps } from 'src/common/classes';

const SearchBar = ({
  handleChange, value, classes, onSubmit,
}) => (
  <form onSubmit={onSubmit} className={classes.form}>
    <TextField
      label="Rechercher..."
      placeholder="Rechercher..."
      name="searchBar"
      variant="outlined"
      className={classes.input}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  </form>
);

SearchBar.propTypes = {
  handleChange: func.isRequired,
  value: string,
  ...classesProps,
};

SearchBar.defaultProps = {
  value: '',
};

export default SearchBar;
