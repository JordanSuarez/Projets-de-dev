import React from 'react';

import { func, string } from 'prop-types';
import { IconButton, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';

const SearchBar = ({ handleChange, handleClick, value }) => (
  <form>
    <TextField
      value={value}
      onChange={handleChange}
      id="search-bar"
      size="small"
      label="Rechercher"
      name="searchBar"
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleClick}>
            <InputAdornment position="end">
              <ClearIcon />
            </InputAdornment>
          </IconButton>
        ),
      }}
    />
  </form>
);

SearchBar.propTypes = {
  handleChange: func.isRequired,
  handleClick: func.isRequired,
  value: string,
};

SearchBar.defaultProps = {
  value: '',
};

export default SearchBar;
