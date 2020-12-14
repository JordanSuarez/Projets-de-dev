import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';

const Messages = ({
  classes,
  channel,
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
    sendMessage(inputValue, channel.id);
  };

  return (
    <>
      <div className={classes.chat}>
        <h3>{channel.name}</h3>

        <ul className={classes.messages}>
          {messages.map(({ id, message, userId }) => (
            <li key={id} className={userId === currentUserId ? classes.myMessage : classes.message}>
              {message}: {userId}
            </li>
          ))}
        </ul>
        <div>
          <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Entrez votre message" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          </form>
        </div>
      </div>
    </>
  );
};

Messages.propTypes = {
  ...classesProps,
  channel: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  currentUserId: PropTypes.number.isRequired,
};

Messages.defaultProps = {

};

export default Messages;
