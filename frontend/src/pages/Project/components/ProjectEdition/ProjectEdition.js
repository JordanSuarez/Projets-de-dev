import React, { useEffect } from 'react';

import ProjectForm from 'src/common/components/ProjectForm';
import Base from 'src/common/components/Base';
import {
  bool, func, object, string,
} from 'prop-types';
import formatSubmitValues from 'src/pages/Project/helpers/formatSubmitProjectValues';
import { useHistory, useParams } from 'react-router-dom';
import formatInitialValues from './formData/formatInitialValues';

const ProjectEdition = ({
  project, handleEditProject, redirect, fetchProjectById, loading,
}) => {
  const history = useHistory();
  const { id } = useParams();

  // Format values with good structure before send it to the api
  const handleFormatProjectValues = (formValues) => {
    handleEditProject(formatSubmitValues(formValues));
  };

  useEffect(() => {
    fetchProjectById(id);

    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  return (
    <Base loading={loading}>
      <ProjectForm title="Modifier un projet" initialValues={formatInitialValues(project)} handleSubmitProject={handleFormatProjectValues} />
    </Base>
  );
};

ProjectEdition.propTypes = {
  handleEditProject: func.isRequired,
  fetchProjectById: func.isRequired,
  project: object.isRequired,
  redirect: string.isRequired,
  loading: bool.isRequired,
};

export default ProjectEdition;
