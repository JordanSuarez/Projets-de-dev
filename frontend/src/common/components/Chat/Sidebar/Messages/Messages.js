import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Avatar,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const Messages = ({
  classes,
  sendMessage,
  messages,
  currentUserId,
}) => {
  const [inputValue, setInputValue] = useState('');
  // TODO
  // Recuperer le nom du channel
  // Recuperation des messages du channel depuis la DB + boucles sur li
  // Detecter si le message viens de l'utilisateur qui est connecté pour affichage diff
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
    setInputValue('');
  };
  console.log(messages);
  return (
    <>
      <div className={classes.chat}>
        <h3>Chat</h3>

        <ul className={classes.messages}>
          {messages.map(({ id, content, userId }) => (
            <li
              key={id}
              className={userId === currentUserId ? classes.alignRight : classes.alignLeft}
            >
              <div className={userId === currentUserId ? classes.myMessage : classes.message}>
                <div>
                  <p>Name{userId}</p>
                  <p>le 12/05 a 18h03</p>
                </div>
                {content}
              </div>
              <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXWk4HOB6y3GDM1oGMJYWUM_rPChE80R-OQ&usqp=CAU" />
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
  currentUserId: PropTypes.number.isRequired,
};

Messages.defaultProps = {

};

export default Messages;
