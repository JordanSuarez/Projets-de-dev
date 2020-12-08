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
    <Base loading={loading}>
      <>
        <div className={classes.container}>
          <div className={classes.listCard}>
            {arrayProjects.map(({
              id: projectId, title, description, tags, user, image,
            }) => (
              <CardProject
                key={projectId}
                projectId={projectId}
                title={title}
                tags={tags}
                description={description}
                userId={user.id}
                userImage={user.userImage}
                image={image}
              />
            ))}
          </div>
          <Pagination className={classes.pagination} count={10} size="small" />
        </div>
      </>
    </Base>
  );
};

Projects.propTypes = {
  ...classesProps,
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Projects;
