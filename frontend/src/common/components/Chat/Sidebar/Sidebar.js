import React from 'react';

import { classes as classesProps } from 'src/common/classes';
import Messages from 'src/common/components/Chat/Sidebar/Messages';
import Users from 'src/common/components/Chat/Sidebar/Users';

const Sidebar = ({
  classes,
}) => (
  <>
    <div className={classes.chatSidebar}>
      <Messages />
      <Users />
    </div>
  </>
);

Sidebar.propTypes = {
  ...classesProps,
};

Sidebar.defaultProps = {

};

export default Sidebar;
