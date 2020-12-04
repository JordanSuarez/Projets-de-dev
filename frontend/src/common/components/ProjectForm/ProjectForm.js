import React, { useEffect, useState } from 'react';

import { Form as FormRff } from 'react-final-form';
import Editor from 'src/common/components/QuillEditor';
import ReactQuill from 'react-quill';
import { Autocomplete, TextField as Field } from 'mui-rff';
import {
  Checkbox, Button, TextField, Grid,
} from '@material-ui/core';
import { getHomeRoute } from 'src/common/routing/routesResolver';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { classes as classesProps } from 'src/common/classes';
import FileBase64 from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import { modules, formats } from 'src/common/components/QuillEditor/EditorToolbar';
import top100Films from './formData/fakeData';
import './styles.scss';
import fields from './formData/fields';
import initialsValues from './formData/initialValues';

const Form = ({ classes }) => {
  const history = useHistory();
  const FORM_STATE = 'formState';
  const [formValues, setFormValues] = useState();
  const [errorFields, setErrorFields] = useState({});

  const getFormStateFromStorage = () => JSON.parse(localStorage.getItem(FORM_STATE));

  // Get values from local storage if exist, else get value from state
  const [formState, setFormState] = useState(
    getFormStateFromStorage() !== null
      ? getFormStateFromStorage()
      : initialsValues,
  );

  const setFormStateToStorage = () => localStorage.setItem(FORM_STATE, JSON.stringify(formState));
  useEffect(() => {
    // Save to the localstorage form
    setFormStateToStorage();
  }, [formState]);

  const onSubmit = (values) => {
    if (formState.tagsChecked.length === 0) {
      return setErrorFields({ ...errorFields, tagsChecked: true });
    }
    if (formState.image === '') {
      return setErrorFields({ ...errorFields, image: true });
    }

    // TODO set values redux instead of react state
    setFormValues({
      ...values,
      title: formState.title,
      githubLink: formState.githubLink,
      projectLink: formState.projectLink,
      description: formState.description,
      imageUpload: formState.image,
      imageUploadName: formState.imageName,
      tagsChecked: formState.tagsChecked,
      partnersSelected: formState.partnersSelected,
    });

    // TODO remove formState from localstorage on axios request
    return localStorage.removeItem(FORM_STATE);
  };

  // Controlled Inputs
  const handleQuitForm = () => {
    history.push(getHomeRoute());
  };
  const handleChange = (event) => {
    setErrorFields({ ...errorFields, [event.target.name]: false });
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const getFiles = (files) => {
    setErrorFields({ ...errorFields, image: false });
    setFormState({ ...formState, image: files.base64, imageName: files.name });
  };
  const handleChangeQuillEditorValue = (value) => {
    setFormState({ ...formState, description: value });
  };

  // Icon for AutoComplete component
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const onBlurField = (event) => {
    if (event.target.name === 'title') {
      return event.target.value === ''
        ? setErrorFields({ ...errorFields, [event.target.name]: true })
        : setErrorFields({ ...errorFields, [event.target.name]: false });
    }
    setErrorFields(
      formState.tagsChecked.length === 0
        ? { ...errorFields, tagsChecked: true }
        : { ...errorFields, tagsChecked: false },
    );
  };

  const getHelperText = (name) => {
    if (name === 'title') {
      return formState.title === '' ? 'Ce champ est requis' : ' ';
    }
    return '';
  };

  return (
    <Grid container wrap="wrap" xs={12} sm={12} md={8} l={8} justify="center" className={classes.container}>
      <h2 className={classes.subtitle}>
        Créer un projet
      </h2>
      <FormRff
        onSubmit={onSubmit}
        autoComplete="on"
        render={({
          handleSubmit, submitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid item xs={12} sm={12} className={classes.inputContainer}>
              {fields.map(({ name, label, placeholder }) => (
                <div key={name} className={classes.input}>
                  <Field
                    name={name}
                    variant="outlined"
                    label={label}
                    placeholder={placeholder}
                    fullWidth
                    value={formState[name]}
                    onChange={handleChange}
                    required={name === 'title'}
                    onBlur={onBlurField}
                    error={errorFields[name]}
                    helperText={getHelperText(name)}
                  />
                </div>
              ))}

            </Grid>
            <div>
              <Grid item xs={12} sm={12}>
                {errorFields.tagsChecked
                && (
                <div className={classes.errorTagsChecked}>
                  * Au moins une catégorie est requise
                </div>
                )}
                <Autocomplete
                  className={classes.autoComplete}
                  name="tagsChecked"
                  multiple
                  id="tagsChecked"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionValue={(option) => option}
                  getOptionLabel={(option) => option.title}
                  value={formState.tagsChecked}
                  onBlur={onBlurField}
                  limitTags={2}
                  size="small"
                  onChange={(event, values) => {
                    setErrorFields(
                      values.length === 0
                        ? { ...errorFields, tagsChecked: true }
                        : { ...errorFields, tagsChecked: false },
                    );
                    setFormState({ ...formState, tagsChecked: values });
                  }}
                  getOptionSelected={(option, value) => option.title === value.title}
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Catégorie(s)"
                      placeholder="Catégorie(s)"
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} sm={12}>
                <Autocomplete
                  name="partnersSelected"
                  className={classes.autoComplete}
                  filterSelectedOptions
                  multiple
                  id="partnersSelected"
                  options={top100Films}
                  limitTags={2}
                  size="small"
                  getOptionValue={(option) => option}
                  getOptionLabel={(option) => option.title}
                  value={formState.partnersSelected}
                  onChange={(event, values) => {
                    setFormState({ ...formState, partnersSelected: values });
                  }}
                  getOptionSelected={(option, value) => option.title === value.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Collaborateur(s)"
                      placeholder="Collaborateur(s)"
                    />
                  )}
                />
              </Grid>

            </div>
            <Grid item xs={12} sm={12} className={classes.editorContainer}>
              <ReactQuill
                theme="snow"
                value={formState.description}
                onChange={handleChangeQuillEditorValue}
                placeholder="Décris ton projet..."
                modules={modules}
                formats={formats}
                className={classes.editor}
              />
            </Grid>
            <Grid item xs={12} className={classes.imageContainer}>
              <h3 className={classes.imageTitle}>Ajouter une image de présentation</h3>
              <div className={classes.editorContainer}>
                <div className={classes.inputFile}>
                  <div className={classes.customUploadButton}>
                    <label from="nul" className={classes.newButtonUpload}>
                      Choisir un fichier
                    </label>
                    <p className={classes.fileName}>{formState.imageName} </p>
                    <FileBase64
                      hidden
                      onDone={getFiles}
                    />
                  </div>
                  {errorFields.image
                      && (
                      <div className={classes.errorImage}>
                        * Une image est requise
                      </div>
                      )}
                  {formState.image.length > 0 && <img src={formState.image} alt="illustration du projet" className={classes.imageInput} />}
                </div>
              </div>

            </Grid>
            {errorFields.length > 0
                && (
                <div className={classes.errorForm}>
                  * Au moins un champ requis n'est pas remplis
                </div>
                )}
            <div className={classes.buttonsWrapper}>
              <Button type="button" variant="outlined" className={classes.quitButton} onClick={handleQuitForm}>Abandonner</Button>
              <Button type="submit" variant="contained" className={classes.submitButton} disabled={submitting}>Soumettre</Button>
            </div>
            <pre>{JSON.stringify(formValues, 0, 2)}</pre>
          </form>
        )}
      />
    </Grid>
  );
};

Form.propTypes = {
  ...classesProps,
};

export default Form;
