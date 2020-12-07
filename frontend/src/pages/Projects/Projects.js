import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';

// eslint-disable-next-line arrow-body-style
const Projects = ({
  classes,
  getProjects,
  projects,
  loading,
}) => {
  useEffect(() => {
    getProjects();
  }, []);
  const arrayProjects = Object.values(projects);
  console.log(arrayProjects);
  return (
    <Base>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <div>
          {arrayProjects.map((project) => (
            <CardProject {...project} key={project.id} />
          ))}
        </div>
      )}
    </Base>
  );
};

Projects.propTypes = {
  ...classesProps,
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.shape({
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Projects;
