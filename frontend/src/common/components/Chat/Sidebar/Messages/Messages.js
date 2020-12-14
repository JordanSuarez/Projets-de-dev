import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@material-ui/core';

import { classes as classesProps } from 'src/common/classes';

const Messages = ({
  classes,
  channel,

}) => {
  // TODO
  // Recuperer le nom du channel
  // Recuperation des messages du channel depuis la DB + boucles sur li
  // Detecter si le message viens de l'utilisateur qui est connecté pour affichage diff
  console.log('messages');
  return (
    <>
      <div className={classes.chat}>
        <h3>{channel}</h3>

        <ul className={classes.messages}>
          <li className={classes.message}> Message 1</li>
          <li className={classes.myMessage}> Message 2</li>
          <li className={classes.message}> Message 3</li>
          <li className={classes.message}> Message 4</li>
          <li className={classes.myMessage}> Message 5</li>
        </ul>

        <div>
          <form className={classes.form} autoComplete="off">
            <TextField id="standard-basic" label="Entrez votre message" />
          </form>
        </div>
      </div>
    </>
  );
};

Messages.propTypes = {
  ...classesProps,
  channel: PropTypes.string,

};

Messages.defaultProps = {
  channel: 'Todo ChannelName',
};

export default Messages;
