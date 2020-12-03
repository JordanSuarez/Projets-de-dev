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
  if (!values.email) {
    errors.email = 'Ce champ est requis';
  }
  if (!values.password) {
    errors.password = 'Ce champ est requis';
  }
  return errors;
};

const Login = ({ classes }) => {
  const [formValues, setFormValues] = useState();

  const onSubmit = (values) => {
    setFormValues(values);
  };
  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Connexion</h2>
          <Form
            className={classes.form}
            onSubmit={onSubmit}
            initialValues=""
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} noValidate>
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
                  type="password"
                  label="Password"
                  name="password"
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
                  <p className={classes.inscription} onClick="#"> Pas de compte ? Je veux m'inscrire </p>
                </Box>
              </form>
            )}
          />
        </Box>
      </div>
    </Base>
  );
};

Login.propTypes = {
  ...classesProps,
};

Login.defaultProps = {

};
export default Login;
