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
  isLogged,
}) => {
  useEffect(() => {
    connectWebSocket();
  }, []);

  const openChat = () => {
    getMessageList();
    setStatus(1);
  };
  const closeChat = () => {
    setStatus(0);
  };
  return (
    <>
      {(status === 0 && isLogged) && (
        <div className={classes.chatContainerButton}>
          <IconButton className={classes.chatButton} aria-label="open chat" onClick={openChat}>
            <ForumIcon className={classes.chatIcon} />
          </IconButton>
        </div>
      )}

      {(status === 1 && isLogged) && (
        <>
          <IconButton className={classes.closeChatButton} aria-label="open chat" onClick={closeChat}>
            <CloseIcon className={classes.closedIcon} />
          </IconButton>
        </>
      ) }
      {((status === 1 || status === 2 || status === 3) && isLogged) && (
        <Sidebar />
      )}
    </>
  );
};

Chat.propTypes = {
  ...classesProps,
  setStatus: PropTypes.func.isRequired,
  connectWebSocket: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  getMessageList: PropTypes.func.isRequired,
};

Chat.defaultProps = {

};

export default Chat;
