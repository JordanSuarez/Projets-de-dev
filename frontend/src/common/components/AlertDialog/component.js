import React from 'react';

import { bool, func, string } from 'prop-types';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';

const AlertDialog = ({
  open, title, content, agreeLabelButton, disagreeLabelButton, onCancel, onAgree, classes,
}) => (
  <Dialog open={open}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{content}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="outlined" onClick={onAgree} className={classes.agreeButton}>
        {agreeLabelButton}
      </Button>
      <Button variant="contained" onClick={onCancel} className={classes.disagreeButton}>
        {disagreeLabelButton}
      </Button>
    </DialogActions>
  </Dialog>
);

AlertDialog.propTypes = {
  agreeLabelButton: string.isRequired,
  content: string.isRequired,
  disagreeLabelButton: string.isRequired,
  onAgree: func.isRequired,
  onCancel: func.isRequired,
  open: bool.isRequired,
  title: string.isRequired,
  ...classesProps,
};

export default AlertDialog;
