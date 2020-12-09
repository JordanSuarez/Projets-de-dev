import React from 'react';

import { func, string } from 'prop-types';
import { TextField } from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';

const SearchBar = ({
  onChange, value, classes, onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <TextField
      label="Rechercher..."
      placeholder="Rechercher..."
      name="searchBar"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  </form>
);

SearchBar.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  value: string,
  ...classesProps,
};

SearchBar.defaultProps = {
  value: '',
};

export default SearchBar;
