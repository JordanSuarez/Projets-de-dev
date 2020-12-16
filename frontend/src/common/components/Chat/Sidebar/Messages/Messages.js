import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const Messages = ({
  classes,
  sendMessage,
  messages,
  currentUserId,
  currentUser,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue, currentUser.username, currentUser.userImage);
    setInputValue('');
  };

  return (
    <>
      <div className={classes.chat}>
        <h3>Chat</h3>

        <ul className={classes.messages}>
          {messages.map(({
            id, content, userId, User, createdAt,
          }) => (
            <li
              key={id}
              className={userId === currentUserId ? classes.alignRight : classes.alignLeft}
            >
              <div className={userId === currentUserId ? classes.myMessage : classes.message}>
                <div>
                  <p>{User.username}</p>
                  <p>le {new Date(createdAt).toLocaleString('fr-FR')}</p>
                </div>
                {content}
              </div>
              <Avatar alt="Cindy Baker" src={User.userImage} />
            </li>
          ))}
        </ul>
        <div>
          <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
            <Input
              id="input-with-icon-adornment"
              className={classes.inputMessage}
              type="text"
              label="Entrez votre message"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              startAdornment={(
                <InputAdornment position="end">
                  <SendIcon />
                </InputAdornment>
              )}
              endAdornment={(
                <InputAdornment position="end">
                  <SendIcon />
                </InputAdornment>
              )}
            />
          </form>
        </div>
      </div>
    </>
  );
};

Messages.propTypes = {
  ...classesProps,
  messages: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
};

Messages.defaultProps = {

};

export default Messages;
