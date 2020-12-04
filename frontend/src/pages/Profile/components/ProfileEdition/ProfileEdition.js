/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { classes as classesProps } from 'src/common/classes';
import FileBase64 from 'react-file-base64';
import {
  TextField,
} from 'mui-rff';
import {
  Box,
  Button,

} from '@material-ui/core';
import './styles.scss';
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

// eslint-disable-next-line arrow-body-style
const ProfileEdition = ({ classes, getProfile }) => {
  useEffect(() => {
    getProfile();
  }, []);
  const handleUpdateProfile = () => console.log('handleupdate');

  const getFiles = () => {
    console.log('A faire files upload');
  };
  return (
    <Base>
      <div className={classes.container}>
        <Box borderRadius={16} className={classes.content} boxShadow={2}>
          <h2 className={classes.formTitle}>Modification du profil</h2>
          <Form
            className={classes.form}
            onSubmit={handleUpdateProfile}
            initialValues=""
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  className={classes.textfield}
                  type="string"
                  label="Nom d'utilisateur"
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
                <div className={classes.imageContainer}>
                  <h3 className={classes.imageTitle}>Image de profil:</h3>
                  <div className={classes.inputFile}>
                    <div className={classes.customUploadButton}>
                      <label from="nul" className={classes.newButtonUpload}>
                        Choisir un fichier
                      </label>
                      <p className={classes.fileName}> TODO FILE NAME </p>
                      <FileBase64
                        hidden
                      />
                    </div>
                  </div>
                </div>
                <Box className={classes.containerButton}>
                  <Button
                    className={classes.annuler}
                    variant="contained"
                    type=""

                  >
                    Annuler
                  </Button>
                  <Button
                    className={classes.submit}
                    variant="contained"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
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

ProfileEdition.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
};

export default ProfileEdition;
