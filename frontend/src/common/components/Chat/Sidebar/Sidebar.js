import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  List,
  ListSubheader,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { classes as classesProps } from 'src/common/classes';
import Messages from 'src/common/components/Chat/Sidebar/Messages';
import Users from 'src/common/components/Chat/Sidebar/Users';

const Sidebar = ({
  classes,
}) => {
  return (
    <>
      <div className={classes.chatSidebar}>
          <Users />
          <Messages />
      </div>
    </>
  );
};

Sidebar.propTypes = {
  ...classesProps,
};

Sidebar.defaultProps = {

};

export default Sidebar;
