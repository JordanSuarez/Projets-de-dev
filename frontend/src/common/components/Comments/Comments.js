import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import {
  TextField,
  Avatar,
  Box,
  Button,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';

// eslint-disable-next-line arrow-body-style
const Comments = ({
  classes,
  comments,
}) => {
  const submitForm = () => {
    console.log('comment send');
  };
  const validate = (values) => {
    const errors = {};
    if (!values.message) {
      errors.email = 'Ce champ est requis';
    }
    return errors;
  };

  return (
    <div>

      <div className={classes.containerForm}>
        <h4 className={classes.formTitle}> Ajouter un commentaire </h4>
        <Form
          className={classes.form}
          onSubmit={submitForm}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} noValidate>

              <TextField
                className={classes.textfield}
                type="text"
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                required
              />
              <Box className={classes.containerButton}>
                <Button
                  className={classes.submit}
                  variant="contained"
                  type="submit"
                  disabled={submitting}
                >
                  Envoyer
                </Button>
              </Box>
            </form>
          )}
        />
      </div>

      <div className={classes.commentList}>
        {comments.length > 0 && (
          comments.map((comment) => (
            <div key={comment.id}>
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
  comments: PropTypes.array,
};

Comments.defaultProps = {

};

export default Comments;
