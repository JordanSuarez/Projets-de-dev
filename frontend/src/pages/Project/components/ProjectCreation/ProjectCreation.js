import React from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import { func } from 'prop-types';
import { initialValues, formatSubmitValues } from './formData';

const ProjectCreation = ({ handleCreateProject }) => {
  // Format values with good structure for send to api
  const handleFormatProjectValues = (formValues) => {
    handleCreateProject(formatSubmitValues(formValues));
  };

  return (
    <Base>
      <ProjectForm title="Créer un projet" initialValues={initialValues} handleSubmitProject={handleFormatProjectValues} />
    </Base>
  );
};

ProjectCreation.propTypes = {
  handleCreateProject: func.isRequired,
};

export default ProjectCreation;
