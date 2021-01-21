import React from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Messages from 'src/common/components/Chat/Sidebar/Messages';
import Menu from 'src/common/components/Chat/Sidebar/Menu';
import Channel from 'src/common/components/Chat/Sidebar/Channel';
import Users from 'src/common/components/Chat/Sidebar/Users';
import User from 'src/common/components/Chat/Sidebar/User';

const Sidebar = ({
  classes,
}) => (
  <>
    <div className={classes.chatSidebar}>
      <Menu />
      <Messages />
      <Channel />
      <Users />
      <User />
    </div>
  </>
);

Sidebar.propTypes = {
  ...classesProps,
};

export default Sidebar;
