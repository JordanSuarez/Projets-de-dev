import React, { useEffect, useState } from 'react';
import PropTypes, { func, objectOf, string } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Box, Button } from '@material-ui/core';
import { getRegisterRoute } from 'src/common/routing/routesResolver';
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

const Login = ({
  classes, handleLogin, redirect, initialValues, hasError, changeHasError,
}) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  useEffect(() => {
    if (hasError) {
      setErrorMessage('mdp ou email invalide');
      changeHasError(false);
    }
  }, [hasError]);
  const handleClick = () => history.push(getRegisterRoute());
  const removeMessage = () => setErrorMessage('');

  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Connexion</h2>
          <Form
            className={classes.form}
            onSubmit={handleLogin}
            initialValues={initialValues}
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                {errorMessage && <p>Identifiants ou mot de passe invalide</p>}

                <TextField
                  className={classes.textfield}
                  type="email"
                  label="Email"
                  name="email"
                  margin="none"
                  onClick={removeMessage}
                  required
                />
                <TextField
                  className={classes.textfield}
                  type="password"
                  label="Password"
                  name="password"
                  margin="none"
                  onClick={removeMessage}
                  required
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
                    Pas de compte ? <span>Je veux m'inscrire</span>
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
  changeHasError: func.isRequired,
  handleLogin: func.isRequired,
  redirect: string.isRequired,
  hasError: PropTypes.bool.isRequired,
  initialValues: objectOf({
    email: string.isRequired,
  }).isRequired,
};

Login.defaultProps = {

};
export default Login;
