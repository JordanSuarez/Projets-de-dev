import React from 'react';

import { classes as classesProps } from 'src/common/classes';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Box, Button } from '@material-ui/core';
import Base from 'src/common/components/Base';
import { func } from 'prop-types';
import validate from './validation';

const Contact = ({ classes, submitContact }) => {
  const onSubmit = (values) => {
    submitContact(values);
  };

  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Nous contacter</h2>
          <Form
            className={classes.form}
            onSubmit={onSubmit}
            initialValues=""
            validate={validate}
            render={({ handleSubmit, submitting, form }) => (
              <form
                onSubmit={async (event) => {
                  await handleSubmit(event);
                  form.reset();
                  // Disable validation after form reset
                  form.resetFieldState('name');
                  form.resetFieldState('email');
                  form.resetFieldState('object');
                  form.resetFieldState('message');
                }}
              >
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="Name"
                  name="name"
                  margin="none"
                  required
                />
                <TextField
                  className={classes.textfield}
                  type="email"
                  label="Email"
                  name="email"
                  margin="none"
                  required
                />
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="Site internet"
                  name="website"
                  margin="none"
                  required={false}
                />
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="Objet"
                  name="object"
                  margin="none"
                  required
                />
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="message"
                  name="message"
                  margin="none"
                  required
                  multiline
                  rows={4}
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
        </Box>
      </div>
    </Base>
  );
};

Contact.propTypes = {
  ...classesProps,
  submitContact: func.isRequired,
};

export default Contact;
