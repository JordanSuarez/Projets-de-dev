import React, { useEffect } from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import { func, object, string } from 'prop-types';
import formatSubmitValues from 'src/pages/Project/helpers/formatSubmitProjectValues';
import { useHistory } from 'react-router-dom';
import formatInitialValues from './formData/formatInitialValues';

const ProjectEdition = ({ project, handleEditProject, redirect }) => {
  const history = useHistory();

  // Format values with good structure before send it to the api
  const handleFormatProjectValues = (formValues) => {
    handleEditProject(formatSubmitValues(formValues));
  };

  // TODO brancher project edition sur redux

  useEffect(() => {
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

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
  redirect: string.isRequired,
};

export default ProjectEdition;
