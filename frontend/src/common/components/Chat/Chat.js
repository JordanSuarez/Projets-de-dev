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
  /* ---------------------- a stocker dans le state ---------------------------- */
  const [showButtonClosed, setShowButtonClosed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  useEffect(() => {
    if (width > 960) {
      setShowButtonClosed(true);
    }
    else {
      setShowButtonClosed(false);
    }
  }, [width]);
  /* ------------------------------------------------------ */

  useEffect(() => {
    connectWebSocket();
  }, []);

  const openChat = () => {
    getMessageList();
    setStatus('chatOpen');
  };
  const closeChat = () => {
    setStatus('chatClosed');
  };
  return (
    <>
      {(status === 'chatClosed' && isLogged) && (
        <div className={classes.chatContainerButton}>
          <IconButton className={classes.chatButton} aria-label="close chat" onClick={openChat}>
            <ForumIcon className={classes.chatIcon} />
          </IconButton>
        </div>
      )}
      {((status === 'chatOpen' || (status !== 'chatClosed' && status !== 'userProfileOpen' && width > 960)) && isLogged) && (
        <>
          <IconButton className={classes.closeChatButton} aria-label="open chat" onClick={closeChat}>
            <CloseIcon className={classes.closedIcon} />
          </IconButton>
        </>
      )}
      {((status !== 'chatClosed') && isLogged) && (
        <Sidebar />
      )}
    </>
  );
};

Chat.propTypes = {
  ...classesProps,
  setStatus: PropTypes.func.isRequired,
  connectWebSocket: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  getMessageList: PropTypes.func.isRequired,
};

export default Chat;
