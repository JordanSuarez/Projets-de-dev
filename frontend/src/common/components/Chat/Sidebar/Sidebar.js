import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  List,
  ListSubheader,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { classes as classesProps } from 'src/common/classes';
import Messages from 'src/common/components/Chat/Sidebar/Messages';
import Channel from 'src/common/components/Chat/Sidebar/Channel';

const Sidebar = ({
  classes,

}) => {
  /* -----------------  ------------------- */
  console.log('sidebar');
  return (
    <>
      <div className={classes.chatSidebar}>

        <div className={classes.channel}>
          <Channel />
        </div>

        <div className={classes.messages}>
          <Messages />
        </div>

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
