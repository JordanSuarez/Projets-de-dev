import React from 'react';

import { func, node, string } from 'prop-types';
import { IconButton as MuiIconButton, Tooltip } from '@material-ui/core';

const IconButton = ({
  title, children, onClick, className,
}) => (
  <Tooltip title={title} className={className}>
    <MuiIconButton onClick={onClick}>{children}</MuiIconButton>
  </Tooltip>
);

IconButton.propTypes = {
  className: string,
  children: node.isRequired,
  onClick: func,
  title: string,
};

IconButton.defaultProps = {
  onClick: Function.prototype,
  title: '',
  className: '',
};

export default IconButton;
