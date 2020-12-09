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
const Comment = ({
  classes,
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
        <div className={classes.infosUser}>
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className={classes.infos}>
            <h4 className={classes.username}>Chuck Norris</h4>
            <p className={classes.date}>Le 20 octobre 2020 a 5h45</p>
          </div>
        </div>
        <p className={classes.commentText}>
          Carlos Ray Norris, dit Chuck Norris, est un acteur américain né le 10 mars 1940 à Ryan.
          D'abord connu pour sa maîtrise des arts martiaux,
          il devient dans les années 1970 une vedette du cinéma d' action.
        </p>

        
      </div>
    </div>


  );
};

Comment.propTypes = {
  ...classesProps,

};

Comment.defaultProps = {

};

export default Comment;
