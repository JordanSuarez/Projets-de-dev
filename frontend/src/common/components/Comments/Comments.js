import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { } from 'mui-rff';
import {
  Avatar,
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

// eslint-disable-next-line arrow-body-style
const Comments = ({
  classes,
  comments,
  handleComment,
  idProject,
}) => {
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [message, SetMessage] = useState('');

  const onComment = (e) => {
    console.log(message);
    e.preventDefault();
    handleComment({ content: message, projectId: idProject });
  };
  
  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={(emoji) => SetMessage(message + emoji.native)}
      />
    );
  }

  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

  return (
    <div className={classes.commentSection}>

      <div className={classes.containerForm}>
        <h4 className={classes.formTitle}> Ajouter un commentaire </h4>
        <form className="form" onSubmit={onComment}>
          <TextField
            className={classes.textfield}
            type="text"
            label="Message"
            name="content"
            multiline
            rows={4}
            variant="outlined"
            value={message}
            onChange={event => SetMessage(event.target.value)}
            required
          />
          {emojiPicker}
          <Button
            className={classes.picker}
            onClick={triggerPicker}
          >
            😁
          </Button>

          <Box className={classes.containerButton}>
            <Button
              className={classes.submit}
              variant="contained"
              type="submit"
            >
              Envoyer
            </Button>
          </Box>
        </form>
      </div>

      <div className={classes.commentList}>
        {comments.length > 0 && (
          comments.map((comment) => (
            <div className={classes.comment} key={comment.id}>
              <div className={classes.infosUser}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src={comment.User.userImage} />
                <div className={classes.infos}>
                  <h4 className={classes.username}>{comment.User.username}</h4>
                  <p className={classes.date}>Le&nbsp;{new Date(comment.createdAt).toLocaleString('fr-FR')}</p>
                </div>
              </div>
              <p className={classes.commentText}>
                {comment.content}
              </p>
            </div>
          ))
        )}
        {comments.length === 0 && (
          <p className={classes.noComment}>
            Il n'y a pas encore de commentaires pour ce projet
          </p>
        )}

      </div>

    </div>

  );
};

Comments.propTypes = {
  ...classesProps,
  comments: PropTypes.array.isRequired,
  handleComment: PropTypes.func.isRequired,
  idProject: PropTypes.number.isRequired,
};

Comments.defaultProps = {

};

export default Comments;
