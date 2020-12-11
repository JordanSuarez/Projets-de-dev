import React, { useEffect } from 'react';

import { func, string } from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProjectForm from 'src/common/components/ProjectForm';
import formatSubmitValues from 'src/pages/Project/helpers/formatSubmitProjectValues';
import Base from 'src/common/components/Base';
import initialValues from './formData/initialValues';

const ProjectCreation = ({
  handleCreateProject, redirect, fetchTags,
}) => {
  const history = useHistory();

  // Format values with good structure before send it to the api
  const handleFormatProjectValues = (formValues) => {
    handleCreateProject(formatSubmitValues(formValues));
  };

  useEffect(() => {
    if (redirect.length > 0) {
      history.push(redirect);
    }
    fetchTags();
  }, [redirect]);

  return (
    <Base>
      <ProjectForm title="Créer un projet" initialValues={initialValues} handleSubmitProject={handleFormatProjectValues} />
    </Base>
  );
};

ProjectCreation.propTypes = {
  handleCreateProject: func.isRequired,
  fetchTags: func.isRequired,
  redirect: string.isRequired,
};

export default ProjectCreation;
