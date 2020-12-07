import React from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import { func, object } from 'prop-types';
import formatInitialValues from './formData/formatInitialValues';

const ProjectEdition = ({ project, handleEditProject }) => (
  <Base>
    <ProjectForm title="Modifier un projet" initialValues={formatInitialValues(project)} handleSubmitProject={handleEditProject} />
  </Base>
);

// TODO add props validation
ProjectEdition.propTypes = {
  handleEditProject: func.isRequired,
  project: object.isRequired,
};

export default ProjectEdition;
