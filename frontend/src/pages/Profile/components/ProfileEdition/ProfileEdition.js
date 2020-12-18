/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { getUserProfileRoute } from 'src/common/routing/routesResolver';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import FileBase64 from 'react-file-base64';
import defaultAvatar from 'src/common/assets/images/avatar.png';
import {
  TextField,
} from 'mui-rff';
import {
  Box,
  Button,

} from '@material-ui/core';
import './styles.scss';
import Base from 'src/common/components/Base';

// eslint-disable-next-line arrow-body-style
const ProfileEdition = ({
  classes,
  getProfile,
  loading,
  userProfile,
  handleUpdate,
  redirect,
}) => {
  useEffect(() => {
    getProfile();
  }, []);
  const [formImage, setFormImage] = useState({ userImage: userProfile.userImage, imageName: 'Choisir une nouvelle image de profil' });
  useEffect(() => {
  }, [formImage]);

  const [changePassword, onChangePassword] = useState(false);
  useEffect(() => {
  }, [changePassword]);

  const validate = (values) => {
    const errors = {};
    let validationEmail = null;
    let validationPassword = null;
    // eslint-disable-next-line no-useless-escape
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
    if (changePassword === true) {
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
    }
    return errors;
  };

  const handleUpdateProfile = (event) => {
    event.userImage = formImage.userImage;
    handleUpdate(event);
  };
  const history = useHistory();

  useEffect(() => {
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  const getFiles = (files) => {
    setFormImage({ userImage: files.base64, imageName: files.name });
  };

  return (
    <Base loading={loading}>
      <>
        <div className={classes.container}>
          <Box borderRadius={16} className={classes.content} boxShadow={2}>
            <h2 className={classes.formTitle}>Modification du profil</h2>
            <Form
              className={classes.form}
              onSubmit={handleUpdateProfile}
              initialValues={{
                username: userProfile.username,
                email: userProfile.email,
                bio: userProfile.bio,
                userImage: userProfile.userImage,
              }}
              validate={validate}
              render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <TextField
                    className={classes.textfield}
                    type="string"
                    label="Nom d'utilisateur"
                    name="username"
                    margin="none"
                  />
                  <TextField
                    className={classes.textfield}
                    type="email"
                    label="Email"
                    name="email"
                    margin="none"
                  />
                  <TextField
                    className={classes.textfield}
                    type="string"
                    multiline
                    label="Description"
                    name="bio"
                    margin="none"
                  />
                  <div className={classes.imageContainer}>
                    <h3 className={classes.imageTitle}>Image de profil:</h3>
                    <div className={classes.inputFile}>
                      <div className={classes.customUploadButton}>
                        <label from="nul" className={classes.newButtonUpload}>
                          Choisir un fichier
                        </label>
                        <p className={classes.fileName}> {formImage.imageName} </p>
                        <FileBase64
                          hidden
                          onDone={getFiles}
                        />
                      </div>
                      <img src={formImage.userImage || defaultAvatar} alt="avatar" className={classes.imageInput} />
                    </div>
                  </div>
                  <div>
                    <Button
                      className={classes.submit}
                      variant="contained"
                      type="button"
                      onClick={() => {
                        onChangePassword(!changePassword);
                      }}
                    >
                      modifier mon mot de passe
                    </Button>
                  </div>
                  {changePassword && (
                    <>
                      <TextField
                        className={classes.textfield}
                        type="password"
                        label="Mot de passe"
                        name="password"
                        margin="none"
                      />
                      <TextField
                        className={classes.textfield}
                        type="password"
                        label="Confirmation mot de passe"
                        name="passwordConfirmation"
                        margin="none"
                      />
                    </>
                  )}
                  <Box className={classes.containerButton}>
                    <Button
                      className={classes.annuler}
                      variant="outlined"
                      type="button"
                      onClick={() => history.push(getUserProfileRoute())}
                    >
                      Annuler
                    </Button>
                    <Button
                      className={classes.submit}
                      variant="contained"
                      type="submit"
                      disabled={submitting}
                    >
                      Valider
                    </Button>
                  </Box>
                </form>
              )}
            />
          </Box>
        </div>
      </>
    </Base>
  );
};

ProfileEdition.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default ProfileEdition;
