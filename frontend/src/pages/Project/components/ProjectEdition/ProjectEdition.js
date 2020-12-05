import React from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import { object } from 'prop-types';
import formatInitialValues from './formData/formatInitialValues';

const ProjectEdition = ({ project }) => (
  <Base>
    <ProjectForm title="Modifier un projet" initialValues={formatInitialValues(project)} />
  </Base>
);

// TODO add props validation
ProjectEdition.propTypes = {
  project: object.isRequired,
};

export default ProjectEdition;
