import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Pagination from '@material-ui/lab/Pagination';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import { useParams, useHistory } from 'react-router-dom';
import { getProjectsListRoute } from 'src/common/routing/routesResolver';
import SearchBar from 'src/common/components/SearchBar/SearchBar';
import { isEmpty } from 'lodash';

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
  const [inputValue, setInputValue] = useState('');
  const limit = 12;
  const arrayProjects = Object.values(projects);
  const [searchResults, setSearchResults] = useState(arrayProjects);

  useEffect(() => {
    getProjects(`?limit=${limit}`, `&offset=${currentOffset}`);
  }, [currentOffset]);

  const changePage = (event, value) => {
    setOffset((value * 12) - 12);
    history.push(getProjectsListRoute(value));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    if (!isEmpty(value)) {
      setSearchResults(
        arrayProjects.filter(
          (project) => (
            Object.keys(project).some(
              () => (
                project.title.toLowerCase().includes(value.toLowerCase())),
            )
          ),
        ),
      );
    }
    else {
      setSearchResults(arrayProjects);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('');
    setSearchResults([]);
  };

  return (
    <Base loading={loading}>
      <div className={classes.headerContainer}>
        <h2 className={classes.subtitle}>Liste des Projets</h2>
        <SearchBar
          value={inputValue}
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={classes.test}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.listCard}>
          {searchResults.length > 0
          && searchResults.map(({
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
          {searchResults.length === 0
          && arrayProjects.map(({
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
        <Pagination className={classes.pagination} page={parseInt(offset, 10)} count={Math.ceil(projectsNumber / limit)} size="small" onChange={changePage} />
      </div>
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
