import React, { useEffect, useState } from 'react';

import {
  arrayOf, func, number, shape, string,
  bool,
} from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Form as FormRff } from 'react-final-form';
import Editor from 'src/common/components/QuillEditor';
import ReactQuill from 'react-quill';
import { Autocomplete, TextField as Field } from 'mui-rff';
import {
  Checkbox, Button, TextField, Grid,
} from '@material-ui/core';
import { getUserProfileRoute } from 'src/common/routing/routesResolver';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { classes as classesProps } from 'src/common/classes';
import FileBase64 from 'react-file-base64';
import { modules, formats } from 'src/common/components/QuillEditor/EditorToolbar';
import reziseFile from 'src/common/helpers/imageResizer';
import { profiles } from './formData/fakeData';
import fields from './formData/fields';

import './styles.scss';

const Form = ({
  classes, title, initialValues, handleSubmitProject, tags, hasError,
}) => {
  const history = useHistory();
  const { id } = useParams();
  const [errorFields, setErrorFields] = useState({});
  const [formState, setFormState] = useState(initialValues);
  const [submitting, setSubmitting] = useState(hasError);

  useEffect(() => {
    setSubmitting(false);
  }, [hasError]);

  const onSubmit = (values) => {
    setSubmitting(true);
    if (formState.tags.length === 0) {
      setSubmitting(false);
      return setErrorFields({ ...errorFields, tagsMinValue: true });
    }
    if (formState.tags.length > 6) {
      setSubmitting(false);
      return setErrorFields({ ...errorFields, tagsMaxValue: true });
    }
    if (formState.image === '') {
      setSubmitting(false);
      return setErrorFields({ ...errorFields, image: true });
    }
    // return form values and project id from useParams
    console.log(formState, values)
    return handleSubmitProject({ ...formState, ...values }, id);
  };

  // Controlled Inputs
  const handleQuitForm = () => {
    history.push(getUserProfileRoute());
  };
  const handleChange = (event) => {
    setErrorFields({ ...errorFields, [event.target.name]: false });
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const getFiles = async (files) => {
    const imageResized = await reziseFile(files, 1920);
    setFormState({
      ...formState,
      image: imageResized.length > files.base64.length ? files.base64 : imageResized,
      imageName: files.name,
    });
    setErrorFields({ ...errorFields, image: false });
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
    return setErrorFields(
      formState.tags.length < 1
        ? { ...errorFields, tagsMinValue: true }
        : { ...errorFields, tagsMinValue: false },
      formState.tags.length > 5
        ? { ...errorFields, tagsMaxValue: true }
        : { ...errorFields, tagsMaxValue: false },
    );
  };

  const getHelperText = (name) => {
    if (name === 'title') {
      return formState.title === '' ? 'Ce champ est requis' : ' ';
    }
    return '';
  };

  return (
    <Grid item xs={12} sm={12} md={8} l={7} xl={6} className={classes.container}>
      <h2 className={classes.subtitle}>{title}</h2>
      <FormRff
        onSubmit={onSubmit}
        autoComplete="on"
        render={({
          handleSubmit,
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
                {errorFields.tagsMinValue
                && (
                <div className={classes.errorTags}>
                  * Au moins une catégorie est requise
                </div>
                )}
                {errorFields.tagsMaxValue
                && (
                <div className={classes.errorTags}>
                  * 6 catégories maximum
                </div>
                )}
                <Autocomplete
                  className={classes.autoComplete}
                  name="tags"
                  multiple
                  id="tags"
                  options={tags}
                  disableCloseOnSelect
                  getOptionValue={(option) => option}
                  getOptionLabel={(option) => option.name}
                  value={formState.tags}
                  onBlur={onBlurField}
                  // limitTags={2}
                  size="small"
                  onChange={(event, values) => {
                    if (values.length < 1) {
                      setErrorFields({ ...errorFields, tagsMinValue: true });
                    }
                    else {
                      setErrorFields(
                        values.length > 6
                          ? { ...errorFields, tagsMaxValue: true, tagsMinValue: false }
                          : { ...errorFields, tagsMaxValue: false },
                      );
                    }
                    setFormState({ ...formState, tags: values });
                  }}
                  getOptionSelected={(option, value) => option.name === value.name}
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                        color="primary"
                      />
                      {option.name}
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
              <Grid item xs={12} sm={12}>
                {/* <Autocomplete
                  name="partners"
                  className={classes.autoComplete}
                  filterSelectedOptions
                  multiple
                  id="partners"
                  options={profiles}
                  // limitTags={2}
                  size="small"
                  getOptionValue={(option) => option}
                  getOptionLabel={(option) => option.name}
                  value={formState.partners}
                  onChange={(event, values) => {
                    setFormState({ ...formState, partners: values });
                  }}
                  getOptionSelected={(option, value) => option.name === value.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Collaborateur(s)"
                      placeholder="Collaborateur(s)"
                    />
                  )}
                /> */}
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
            {(errorFields.title
            || errorFields.tagsMaxValue
            || errorFields.tagsMinValue
            || errorFields.image)
                && (
                <div className={classes.errorFields}>
                  * Au moins un champ requis est incorrect
                </div>
                )}
            <div className={classes.buttonsWrapper}>
              <Button type="button" variant="outlined" className={classes.quitButton} onClick={handleQuitForm}>Abandonner</Button>
              <Button type="submit" variant="contained" className={classes.submitButton} disabled={submitting}>Soumettre</Button>
            </div>
          </form>
        )}
      />
    </Grid>
  );
};

Form.propTypes = {
  ...classesProps,
  title: string.isRequired,
  handleSubmitProject: func.isRequired,
  tags: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      image: string,
    }).isRequired,
  ).isRequired,
  hasError: bool.isRequired,
};

export default Form;
