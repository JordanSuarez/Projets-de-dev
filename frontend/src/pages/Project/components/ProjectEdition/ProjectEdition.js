import React from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import { func, object } from 'prop-types';
import formatSubmitValues from 'src/pages/Project/helpers/formatSubmitProjectValues';
import formatInitialValues from './formData/formatInitialValues';

const ProjectEdition = ({ project, handleEditProject }) => {
  // Format values with good structure before send it to the api
  const handleFormatProjectValues = (formValues) => {
    handleEditProject(formatSubmitValues(formValues));
  };

  return (
    <Base>
      <ProjectForm title="Modifier un projet" initialValues={formatInitialValues(project)} handleSubmitProject={handleFormatProjectValues} />
    </Base>
  );
};

// TODO add props validation
ProjectEdition.propTypes = {
  handleEditProject: func.isRequired,
  project: object.isRequired,
};

export default ProjectEdition;
