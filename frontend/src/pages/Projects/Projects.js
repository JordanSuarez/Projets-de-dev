import React, { useEffect, useState } from 'react';
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
  const [offset, setOffset] = useState(0);
  const limit = 12;
  useEffect(() => {
    console.log('modif');
    getProjects(`?limit=${limit}`, `&offset=${offset}`);
  }, [offset]);

  console.log(offset);
  const changePage = (event, value) => {
    setOffset((value * 12) - 12);
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
          <Pagination className={classes.pagination} count={10} size="small" onChange={changePage}/>
        </div>
      </>
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
