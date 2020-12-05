import React from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import formatInitialValues from './formData/formatInitialValues';

const ProjectCreation = () => (
  <Base>
    <ProjectForm title="Créer un projet" initialValues={formatInitialValues} />
  </Base>
);

ProjectCreation.propTypes = {

};

export default ProjectCreation;
