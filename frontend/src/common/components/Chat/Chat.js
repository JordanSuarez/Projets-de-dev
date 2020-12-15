import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import CloseIcon from '@material-ui/icons/Close';
import { classes as classesProps } from 'src/common/classes';
import Sidebar from 'src/common/components/Chat/Sidebar';

const Chat = ({
  classes,
  setStatus,
  status,
  connectWebSocket,
  getMessageList,
}) => {
  const [open, setOpen] = useState(status);
  useEffect(() => {
    connectWebSocket();
  }, []);

  const handleClick = () => {
    getMessageList();
    setStatus(!status);
    setOpen(!status);
  };
  return (
    <>
      {open === false && (
        <div className={classes.chatContainerButton}>
          <IconButton className={classes.chatButton} aria-label="open chat" onClick={handleClick}>
            <ForumIcon className={classes.chatIcon} />
          </IconButton>
        </div>
      )}

      {open === true && (
        <>
          <IconButton className={classes.closeChatButton} aria-label="open chat" onClick={handleClick}>
            <CloseIcon className={classes.closedIcon} />
          </IconButton>
          <Sidebar />
        </>
      ) }
    </>
  );
};

Chat.propTypes = {
  ...classesProps,
  setStatus: PropTypes.func.isRequired,
  connectWebSocket: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  getMessageList: PropTypes.func.isRequired,
};

Chat.defaultProps = {

};

export default Chat;
