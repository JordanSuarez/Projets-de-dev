import React from 'react';

import { string } from 'prop-types';
import ReactQuill from 'react-quill';
import { Field } from 'react-final-form';
// import { classes as classesProps } from 'src/common/classes';
import { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './editor.scss';

export const Editor = ({ name }) => (
  <Field name={name}>
    {({ input: { value, onChange } }) => (
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder="Write something awesome..."
        modules={modules}
        formats={formats}
      />
    )}
  </Field>
);

Editor.propTypes = {
  name: string.isRequired,
  // ...classesProps,
};

export default Editor;
