/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { Form } from 'react-final-form';
import {
  TextField,
} from 'mui-rff';
import {
  Box,
  Button,

} from '@material-ui/core';

import Base from 'src/common/components/Base';

const validate = (values) => {
  const errors = {};
  let validationEmail = null;
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regexEmail.test(values.email)) {
    validationEmail = true;
  }
  else {
    validationEmail = false;
  }

  if (!values.email) {
    errors.email = 'Ce champ est requis';
  }

  if (validationEmail === false) {
    errors.email = 'Adresse email invalide';
  }

  if (!values.name) {
    errors.name = 'Ce champ est requis';
  }

  if (!values.objet) {
    errors.objet = 'Ce champ est requis';
  }

  if (!values.message) {
    errors.message = 'Ce champ est requis';
  }

  return errors;
};

// eslint-disable-next-line arrow-body-style
const Contact = ({ classes }) => {
  const [formContactValues, setFormContactValues] = useState();

  const onSubmit = (values) => {
    console.log(values)
    setFormContactValues(values);
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
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="Name"
                  name="name"
                  margin="none"
                  required={true}
                />
                <TextField
                  className={classes.textfield}
                  type="email"
                  label="Email"
                  name="email"
                  margin="none"
                  required={true}
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
                  name="objet"
                  margin="none"
                  required={true}
                />
                <TextField
                  className={classes.textfield}
                  type="text"
                  label="message"
                  name="message"
                  margin="none"
                  required={true}
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
};

export default Contact;
