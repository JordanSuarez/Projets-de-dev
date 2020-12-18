import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import {
  Input, IconButton, Avatar, Divider,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import defaultAvatar from 'src/common/assets/images/avatar.png';
import './style.scss';

const Messages = ({
  classes,
  sendMessage,
  messages,
  currentUserId,
  currentUser,
}) => {
  const [inputValue, setInputValue] = useState('');

  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const messageScroll = useRef(null);
  useEffect(() => {
    messageScroll.current.scrollTop = messageScroll.current.scrollHeight;
  }, [messages]);

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        className={classes.containerPicker}
        title=" "
        onSelect={(emoji) => setInputValue(inputValue + emoji.native)}
        i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }}
        showPreview={false}
        showSkinTones={false}
      />
    );
  }
  const triggerPicker = (event) => {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SetEmojiPicker(false);
    if (inputValue.length > 0) {
      sendMessage(inputValue, currentUser.username, currentUser.userImage);
      setInputValue('');
    }
  };

  return (
    <div className="chat">
      <div className={classes.chat}>
        <div className={classes.channelTitleContainer}>
          <h3 className={classes.channelTitleSelected}># GENERAL</h3>
        </div>
        <ul ref={messageScroll} className={classes.messages}>
          {messages.map(({
            id, content, userId, User, createdAt,
          }) => (
            <li
              key={id}
              className={userId === currentUserId ? classes.alignRight : classes.alignLeft}
            >
              <div>
                <p className={userId === currentUserId ? classes.pseudoRight : classes.pseudoLeft}>
                  {User.username}
                </p>
                <div className={userId === currentUserId ? classes.myMessage : classes.message}>
                  {content}
                </div>
                <p className={classes.date}>le {new Date(createdAt).toLocaleString('fr-FR')}</p>
              </div>
              <Avatar className={classes.avatar} alt="avatar user" src={User.userImage || defaultAvatar} />
            </li>

          ))}
        </ul>{emojiPicker}
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
                <IconButton
                  size="medium"
                  position="start"
                  className={classes.picker}
                  onClick={triggerPicker}
                >
                  😍
                </IconButton>
              )}
              endAdornment={(
                <IconButton position="end" type="submit" className={classes.submitButton}>
                  <SendIcon />
                </IconButton>
              )}
            />
          </form>

        </div>
      </div>
    </div>
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
