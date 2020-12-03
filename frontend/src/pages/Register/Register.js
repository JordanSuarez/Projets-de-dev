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
  let validationPassword = null;
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPassword = /^(?=.*\d).{4,15}$/;
  if (regexEmail.test(values.email)) {
    validationEmail = true;
  }
  else {
    validationEmail = false;
  }

  if (regexPassword.test(values.password)) {
    validationPassword = true;
  }
  else {
    validationPassword = false;
  }

  if (!values.username) {
    errors.username = 'Ce champ est requis';
  }
  if (!values.email) {
    errors.email = 'Ce champ est requis';
  }
  if (validationEmail === false) {
    errors.email = 'Adresse email invalide';
  }
  if (!values.emailConfirmation) {
    errors.emailConfirmation = 'Ce champ est requis';
  }
  if (values.emailConfirmation !== values.email) {
    errors.emailConfirmation = 'La confirmation de l\'addresse email n\'est pas identique a l\'adresse email';
  }
  if (!values.password) {
    errors.password = 'Ce champ est requis';
  }
  if (validationPassword === false) {
    errors.password = 'Mot de passe invalide, minimum 4 carateres dont un caractere alphanumérique';
  }
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Ce champ est requis';
  }
  if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'La confirmation du mot de passe n\'est pas identique au mot de passe';
  }
  return errors;
};

const Register = ({ classes }) => {
  const [formValues, setFormValues] = useState();

  const onSubmit = (values) => {
    console.log('submit');
    setFormValues(values);
  };
  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Inscription</h2>
          <Form
            className={classes.form}
            onSubmit={onSubmit}
            initialValues=""
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  className={classes.textfield}
                  type="username"
                  label="Pseudo"
                  name="username"
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
                  type="email"
                  label="Confirmation email"
                  name="emailConfirmation"
                  margin="none"
                  required={true}
                />
                <TextField
                  className={classes.textfield}
                  type="password"
                  label="Mot de passe"
                  name="password"
                  margin="none"
                  required={true}
                />
                <TextField
                  className={classes.textfield}
                  type="password"
                  label="Confirmation mot de passe"
                  name="passwordConfirmation"
                  margin="none"
                  required={true}
                />
                <Box className={classes.containerButton}>
                  <Button
                    className={classes.submit}
                    variant="contained"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                  <p className={classes.login} onClick="#"> J'ai deja un compte !</p>
                </Box>
              </form>
            )}
          />
        </Box>
      </div>
    </Base>
  );
};
Register.propTypes = {
  ...classesProps,
};
export default Register;
