import React from 'react';

import { classes as classesProps } from 'src/common/classes';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ classes }) => (
  <CircularProgress className={classes.loader} />
);

Loader.propTypes = {
  ...classesProps,
};

export default Loader;
