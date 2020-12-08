import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Pagination from '@material-ui/lab/Pagination';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import { useParams, useHistory } from 'react-router-dom';
import { getProjectsListRoute } from 'src/common/routing/routesResolver';

// eslint-disable-next-line arrow-body-style
const Projects = ({
  classes,
  getProjects,
  projects,
  projectsNumber,
  loading,
}) => {
  const { offset } = useParams();
  const history = useHistory();
  const [currentOffset, setOffset] = useState((offset * 12) - 12);
  const limit = 12;

  useEffect(() => {
    console.log('modif');
    getProjects(`?limit=${limit}`, `&offset=${currentOffset}`);
  }, [currentOffset]);

  const changePage = (event, value) => {
    setOffset((value * 12) - 12);
    history.push(getProjectsListRoute(value));
  };
  const arrayProjects = Object.values(projects);
  return (
    <Base loading={loading}>
      <>
        <div className={classes.container}>
          <div className={classes.listCard}>
            {arrayProjects.map((project) => (
              <CardProject {...project} key={project.id} />
            ))}
          </div>
          <Pagination className={classes.pagination} page={parseInt(offset, 10)} count={Math.ceil(projectsNumber / limit)} size="small" onChange={changePage} />
        </div>
      </>
    </Base>
  );
};

Projects.propTypes = {
  ...classesProps,
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  projectsNumber: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Projects;
