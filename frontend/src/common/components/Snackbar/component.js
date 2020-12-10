import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';
import { bool, func, string } from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { Snackbar as MUISnackbar, Grid, IconButton } from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';

const Snackbar = ({
  classes, isOpen, content, title, severity, hideSnackbar,
}) => {
  const handleClose = () => {
    hideSnackbar();
  };

  return (
    <Grid item xs={12} sm={12} md={5} className={classes.root}>
      <MUISnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        className={classes.snackbar}
      >
        <Alert
          severity={severity}
          action={(
            <IconButton aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
            )}
        >
          <AlertTitle>{title}</AlertTitle>
          {content}
        </Alert>
      </MUISnackbar>
    </Grid>
  );
};

Snackbar.propTypes = {
  content: string.isRequired,
  hideSnackbar: func.isRequired,
  isOpen: bool.isRequired,
  severity: string,
  title: string.isRequired,
  ...classesProps,
};

Snackbar.defaultProps = {
  severity: 'info',
};

export default Snackbar;
