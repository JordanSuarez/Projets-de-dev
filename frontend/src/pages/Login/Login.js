/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import { Form } from 'react-final-form';
import {
  TextField,
} from 'mui-rff';
import {
  Box,
  Button,

} from '@material-ui/core';
import { getRegisterRoute, getHomeRoute } from 'src/common/routing/routesResolver';
import Base from 'src/common/components/Base';
import { func, string } from 'prop-types';

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

const Login = ({ classes, handleLogin, redirect }) => {
  const history = useHistory();

  useEffect(() => {
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  const handleClick = () => history.push(getRegisterRoute());

  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Connexion</h2>
          <Form
            className={classes.form}
            onSubmit={handleLogin}
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
                  <p className={classes.inscription} onClick={handleClick}>
                    Pas de compte ? Je veux m'inscrires
                  </p>
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
  handleLogin: func.isRequired,
  redirect: string.isRequired,
};

Login.defaultProps = {

};
export default Login;
