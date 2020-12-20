import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Pagination from '@material-ui/lab/Pagination';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import { useParams, useHistory } from 'react-router-dom';
import { getProjectsListRoute } from 'src/common/routing/routesResolver';
import SearchBar from 'src/common/components/SearchBar';
import { isEmpty } from 'lodash';

const Projects = ({
  classes,
  getProjects,
  projectsCurrentPage,
  projectsNumber,
  allProjects,
  loading,
  isLogged,
  getMyLikes,
  myLikes,
  clearHomeState,
}) => {
  const { offset } = useParams();
  const history = useHistory();
  const [currentOffset, setOffset] = useState((offset * 12) - 12);
  const arrayProjectsCurrentPage = Object.values(projectsCurrentPage);
  const arrayAllProjects = Object.values(allProjects);
  const [searchResults, setSearchResults] = useState([]);
  const [hidePagination, setHidePagination] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Pagination
  const limit = 12;
  const changePage = (event, value) => {
    // Scroll to the top of the page after pagination
    window.scrollTo(0, 0);

    setOffset((value * 12) - 12);
    setSearchResults([]);
    getProjects(`?limit=${limit}`, `&offset=${(value * 12) - 12}`);
    history.push(getProjectsListRoute(value));
  };

  useEffect(() => {
    clearHomeState();
    getProjects(`?limit=${limit}`, `&offset=${currentOffset}`);
    if (isLogged) {
      getMyLikes();
    }
  }, []);

  // SearchBar
  const helperText = 'Aucun résultat ne correspond à la recherche';
  const handleChange = (event, value) => {
    setHidePagination(true);
    setInputValue(value);
    if (!isEmpty(value)) {
      setSearchResults(
        arrayAllProjects.filter(
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
      setHidePagination(false);
      setSearchResults(arrayAllProjects);
    }
  };

  return (
    <Base loading={loading}>
      <div className={classes.headerContainer}>
        <h2 className={classes.subtitle}>Liste des Projets</h2>
        <SearchBar
          className={classes.searchBar}
          onInputChange={(event, value) => handleChange(event, value)}
          items={arrayAllProjects}
          label="Recherchez un projet..."
          helperText={isEmpty(searchResults) && !isEmpty(inputValue) ? helperText : ''}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.listCard}>
          {searchResults.length > 0
          && searchResults.map(({
            id: projectId, title, description, tags, user, image, vote,
          }) => {
            let like = false;
            myLikes.map((myLike) => {
              if ((projectId === myLike.projectId) && (myLike.isLike === 1)) {
                like = true;
              }
            });
            return (
              <CardProject
                key={projectId}
                projectId={projectId}
                title={title}
                tags={tags}
                description={description}
                userId={user.id}
                userImage={user.userImage}
                image={image}
                isLogged={isLogged}
                like={like}
                vote={vote}
              />
            );
          })}
          {searchResults.length === 0
          && arrayProjectsCurrentPage.map(({
            id: projectId, title, description, tags, user, image, vote,
          }) => {
            let like = false;
            myLikes.map((myLike) => {
              if ((projectId === myLike.projectId) && (myLike.isLike === 1)) {
                like = true;
              }
            });
            return (
              <CardProject
                key={projectId}
                projectId={projectId}
                title={title}
                tags={tags}
                description={description}
                userId={user.id}
                userImage={user.userImage}
                image={image}
                isLogged={isLogged}
                like={like}
                vote={vote}
              />
            );
          })}
        </div>
        {!hidePagination
        && <Pagination className={classes.pagination} page={parseInt(offset, 10)} count={Math.ceil(projectsNumber / limit)} size="small" onChange={changePage} />}
      </div>
    </Base>
  );
};

Projects.propTypes = {
  ...classesProps,
  getProjects: PropTypes.func.isRequired,
  projectsCurrentPage: PropTypes.object.isRequired,
  allProjects: PropTypes.object.isRequired,
  projectsNumber: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  getMyLikes: PropTypes.func.isRequired,
  clearHomeState: PropTypes.func.isRequired,
  myLikes: PropTypes.array,
};

Projects.defaultProps = {
  myLikes: [],
};
export default Projects;
