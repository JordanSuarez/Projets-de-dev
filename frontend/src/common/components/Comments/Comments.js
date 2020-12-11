import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import './style.scss';

const Comments = ({
  classes,
  comments,
  handleComment,
  handleCommentUpdate,
  idProject,
  isLogged,
  userId,
  redirect,
}) => {
  /* ----------------- reload ------------------- */
  const history = useHistory();
  useEffect(() => {
    if (redirect.length > 0) {
      window.location.reload();
      history.push(redirect);
    }
  }, [redirect]);

  /* ----------------- create ------------------- */
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [message, SetMessage] = useState('');
  const onComment = (e) => {
    e.preventDefault();
    handleComment({ content: message, projectId: idProject });
  };

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        className={classes.containerPicker}
        title=" "
        onSelect={(emoji) => SetMessage(message + emoji.native)}
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

  /* ----------------- update ------------------- */
  const [commentWantUpdate, onCommentWantUpdate] = useState('');
  const [messageUpdate, SetMessageUpdate] = useState('');
  const [emojiPickerUpdateState, SetEmojiPickerUpdate] = useState(false);

  useEffect(() => {
  }, [commentWantUpdate]);

  const onClickEdit = (comment) => {
    onCommentWantUpdate(comment.id);
    SetMessageUpdate(comment.content);
  };

  const onCommentUpdate = (comment) => {
    handleCommentUpdate({ content: messageUpdate, projectId: idProject }, comment.id);
  };

  let emojiPickerUpdate;
  if (emojiPickerUpdateState) {
    emojiPickerUpdate = (
      <Picker
        className={classes.containerPicker}
        title=" "
        onSelect={(emoji) => SetMessageUpdate(messageUpdate + emoji.native)}
        i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }}
        showPreview={false}
        showSkinTones={false}
      />
    );
  }

  const triggerPickerUpdate = (event) => {
    event.preventDefault();
    SetEmojiPickerUpdate(!emojiPickerUpdateState);
  };

  /* ----------------- delete ------------------- */
  const onClickDelete = (comment) => {
    console.log('TODO');
    // handleCommentDelete(comment.id);
  };

  return (
    <div className={classes.commentSection}>
      <div className={classes.containerForm}>
        {isLogged
          ? (
            <>
              <h4 className={classes.formTitle}> Ajouter un commentaire: </h4>
              <form className="form" onSubmit={onComment}>
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="Message"
                  name="content"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(event) => SetMessage(event.target.value)}
                  required
                />
                {emojiPicker}
                <Button
                  className={classes.picker}
                  onClick={triggerPicker}
                >
                  😍
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
            </>
          )
          : (
            <p className={classes.noLogged}> Merci de vous connecter pour poster un commentaire</p>
          )}
      </div>

      <div className={classes.commentList}>
        {comments.length > 0 && (
          comments.map((comment) => (
            <div className={classes.comment} key={comment.id}>
              <div className={classes.infos}>
                <Avatar
                  className={classes.avatar}
                  alt={classes.username}
                  src={comment.User.userImage}
                />
                <div className={classes.headerComment}>
                  <div className={classes.usernameContent}>
                    <h4 className={classes.username}>{comment.User.username}</h4>
                  </div>
                  <div className={classes.rightHeader}>
                    <p className={classes.date}>Le&nbsp;{new Date(comment.createdAt).toLocaleString('fr-FR')}</p>
                    {userId === comment.User.id && (
                      <div>
                        <IconButton
                          className={classes.editButton}
                          variant="contained"
                          type="button"
                          onClick={() => {
                            onClickEdit(comment);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          className={classes.editButton}
                          variant="contained"
                          type="button"
                          onClick={() => {
                            onClickDelete(comment);
                          }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {userId === comment.User.id && (
                <div className={classes.containerFormUpdate}>
                  {commentWantUpdate === comment.id && (
                  <form
                    className="formEdit"
                    onSubmit={(e) => {
                      e.preventDefault();
                      onCommentUpdate(comment);
                    }}
                  >
                    <TextField
                      className={classes.textfieldUpdate}
                      type="text"
                      label="Message"
                      name="content"
                      multiline
                      rows={4}
                      value={messageUpdate}
                      onChange={(event) => SetMessageUpdate(event.target.value)}
                      required
                    />
                    {emojiPickerUpdate}
                    <Button
                      className={classes.pickerUpdate}
                      onClick={triggerPickerUpdate}
                    >
                      😍
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
                  )}
                </div>
              )}

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
  handleCommentUpdate: PropTypes.func.isRequired,
  idProject: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  redirect: PropTypes.string.isRequired,
};

Comments.defaultProps = {

};

export default Comments;
