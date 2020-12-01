import React, { useEffect, useState } from 'react';

import { Form as FormRff } from 'react-final-form';
import Editor from 'src/common/components/QuillEditor';
import { Autocomplete, TextField as Field } from 'mui-rff';
import {
  Checkbox, Button, TextField,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { classes as classesProps } from 'src/common/classes';
import FileBase64 from 'react-file-base64';
import top100Films from './data';

const Form = ({ classes }) => {
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [optionsChecked, setOptionsChecked] = useState([]);
  const [formValues, setFormValues] = useState();
  const [imageBase64, setImageBase64] = useState('');

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => {
    setOptionsSelected([
      {
        title: 'The Shawshank Redemption',
        year: 1994,
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
      },
    ]);
    setOptionsChecked([
      {
        title: 'Inception',
        year: 2010,
      },
      {
        title: 'The Green Mile',
        year: 1999,
      },
    ]);
  }, []);

  const onSubmit = (values) => {
    console.log(values);
    setFormValues({ ...values });
  };

  const getFiles = (files) => {
    setImageBase64(files.base64);
  };

  const initialValues = {
    description: "<p>Thanks for filing an issue!</p><p><br></p><p>If at all possible, please provide a Codesandbox or Codepen to demonstrate the problem you're having with React Quill. Here's a [template] to get you started.</p><p><br></p><p>⚠️ Make sure that your bug hasn't already been fixed by ReactQuill `v2.0.0-beta.2`. See the homepage for instructions on how to upgrade.</p><p><br></p><p>[template]:</p><p>https://codesandbox.io/s/react-quill-template-u9c9c</p><p><br></p><p><br></p><p>### Ticket due diligence</p><p><br></p><p>- [ ] I have verified that the issue persists under ReactQuill `v2.0.0-beta.2`</p><p>- [ ] I can't use the beta version for other reasons</p><p><br></p><p><br></p><p>### ReactQuill version</p><p><br></p><p>- [ ] master</p><p>- [ ] v2.0.0-beta.2</p><p>- [ ] v2.0.0-beta.1</p><p>- [ ] 1.3.5</p><p>- [ ] 1.3.4 or older</p><p>- [ ] Other (fork)</p><p><br></p><p><br></p><p>### FAQ</p><p><br></p><p>**Is this a bug in Quill or ReactQuill?**</p><p><br></p><p>ReactQuill is just a ~thin~ wrapper on top of the Quill editor. Often, what looks like a bug in ReactQuill, is actually a bug in the Quill editor itself. Before opening a ticket, please check the [Quill documentation], and the [issues page], and see if that answers your question first.</p><p><br></p><p>[Quill documentation]:</p><p>https://quilljs.com/docs</p><p><br></p><p>[issues page]:</p><p>https://github.com/quilljs/quill/issues</p><p><br></p><p>**How do I access the wrapped Quill instance?**</p><p><br></p><p>See the [instance methods] and [API] documentation.</p><p><br></p><p>[instance methods]:</p><p>https://github.com/zenoamaro/react-quill#methods</p><p><br></p><p>[API]:</p><p>https://github.com/zenoamaro/react-quill#api-reference</p><p><br></p>",
    checkBox: optionsChecked,
    selectField: optionsSelected,
  };

  return (
    <div>
      <h2 className={classes.subtitle}>
        Créer un projet
      </h2>
      {imageBase64.length > 0 && <img src={imageBase64} alt="illustration du projet" className={classes.imageInput} />}

      <FormRff
        onSubmit={onSubmit}
        initialValues={initialValues}
        autoComplete="on"
        render={({
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.leftContainer}>
              <div>
                <Field
                  name="title"
                  variant="outlined"
                  label="Titre de mon projet"
                  placeholder="Titre de mon projet"
                  fullWidth
                />
              </div>
              <div>
                <Field
                  name="githubLink"
                  variant="outlined"
                  label="Lien Github du projet"
                  placeholder="Lien Github du projet"
                  fullWidth
                />
              </div>
              <div>
                <Field
                  name="projectLink"
                  variant="outlined"
                  label="Lien du projet en ligne"
                  placeholder="Lien du projet en ligne"
                  fullWidth
                />
              </div>
              <div className={classes.imageContainer}>
                <h3 className={classes.imageTitle}>Ajoutez une Image de présentation</h3>

                <div>
                  <FileBase64
                    hidden
                    onDone={getFiles}
                  />
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
                value={optionsSelected}
                onChange={(_e, values) => {
                  setOptionsSelected(values);
                }}
                getOptionSelected={(option, value) => option.title === value.title}
                defaultValue={initialValues.selectField}
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
                defaultValue={initialValues.checkBox}
                className={classes.autoComplete}
                name="checkBox"
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionValue={(option) => option}
                getOptionLabel={(option) => option.title}
                value={optionsChecked}
                onChange={(_e, values) => {
                  setOptionsChecked(values);
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
                  <TextField name="tttt" {...params} variant="outlined" label="Ajouter un ou plusieurs collaborateur(s)" placeholder="Ajouter un ou plusieurs collaborateur(s)" />
                )}
              />
            </div>

            <Editor name="description" />
            <Button type="submit">Submit</Button>
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
