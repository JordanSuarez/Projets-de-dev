import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Pagination from '@material-ui/lab/Pagination';
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
  return (
    <Base>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <>
        <div className={classes.container}>
          <div className={classes.listCard}>
            {arrayProjects.map((project) => (
              <CardProject {...project} key={project.id} />
            ))}
          </div>
  <Pagination className={classes.pagination} count={10} size="small" />
          </div>
        </>
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
