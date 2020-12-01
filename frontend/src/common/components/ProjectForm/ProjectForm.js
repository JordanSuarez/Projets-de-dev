import React, { useEffect, useState } from 'react';

import { Form as FormRff } from 'react-final-form';
import Editor from 'src/common/components/QuillEditor';
import ReactQuill from 'react-quill';
import { Autocomplete, TextField as Field } from 'mui-rff';
import {
  Checkbox, Button, TextField,
} from '@material-ui/core';
import { getHomeRoute } from 'src/common/routing/routesResolver';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { classes as classesProps } from 'src/common/classes';
import FileBase64 from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import { modules, formats } from 'src/common/components/QuillEditor/EditorToolbar';
import top100Films from './formData/fakeData';
import fields from './formData/textField';
import templateEditor from './formData/templateEditor';

const Form = ({ classes }) => {
  const history = useHistory();
  const [formValues, setFormValues] = useState();
  const [formState, setFormState] = useState({
    title: '',
    githubLink: '',
    projectLink: '',
    description: templateEditor,
    image: '',
    tagsChecked: [
      {
        title: 'Inception',
        year: 2010,
      },
      {
        title: 'The Green Mile',
        year: 1999,
      },
    ],
    partnersSelected: [
      {
        title: 'The Shawshank Redemption',
        year: 1994,
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
      },
    ],

  });

  useEffect(() => {
  }, []);

  const onSubmit = (values) => {
    // TODO set values redux instead of react state
    setFormValues({
      ...values,
      title: formState.title,
      githubLink: formState.githubLink,
      projectLink: formState.projectLink,
      description: formState.description,
      imageUpload: formState.image,
    });
  };

  // Controlled Inputs
  const handleQuitForm = () => {
    history.push(getHomeRoute());
  };
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const getFiles = (files) => {
    setFormState({ ...formState, image: files.base64 });
  };
  const handleChangeQuillEditorValue = (value) => {
    setFormState({ ...formState, description: value });
  };

  // Icon for AutoComplete component
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <div>
      <h2 className={classes.subtitle}>
        Créer un projet
      </h2>
      <FormRff
        onSubmit={onSubmit}
        autoComplete="on"
        render={({
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.leftContainer}>
              {fields.map(({ name, label, placeholder }) => (
                <div key={name}>
                  <Field
                    name={name}
                    variant="outlined"
                    label={label}
                    placeholder={placeholder}
                    fullWidth
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className={classes.imageContainer}>
                <h3 className={classes.imageTitle}>Ajoutez une Image de présentation</h3>
                <div>
                  <FileBase64
                    hidden
                    onDone={getFiles}
                  />
                  {formState.image.length > 0 && <img src={formState.image} alt="illustration du projet" className={classes.imageInput} />}
                </div>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <Autocomplete
                name="selectField"
                className={classes.autoComplete}
                filterSelectedOptions
                multiple
                id="tags-outlined"
                options={top100Films}
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
                    label="Catégorie(s) du projet"
                    placeholder="Catégorie(s) du projet"
                  />
                )}
              />
              <Autocomplete
                className={classes.autoComplete}
                name="checkBox"
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionValue={(option) => option}
                getOptionLabel={(option) => option.title}
                value={formState.tagsChecked}
                onChange={(event, values) => {
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
                  <TextField {...params} variant="outlined" label="Ajouter un ou plusieurs collaborateur(s)" placeholder="Ajouter un ou plusieurs collaborateur(s)" />
                )}
              />
            </div>
            <ReactQuill
              theme="snow"
              value={formState.description}
              onChange={handleChangeQuillEditorValue}
              placeholder="Write something awesome..."
              modules={modules}
              formats={formats}
            />
            <div className={classes.buttonsWrapper}>
              <Button type="button" variant="outlined" className={classes.quitButton} onClick={handleQuitForm}>Abandonner</Button>
              <Button type="submit" variant="contained" className={classes.submitButton}>Soumettre</Button>
            </div>
            <pre>{JSON.stringify(formValues, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

Form.propTypes = {
  ...classesProps,
};

export default Form;
