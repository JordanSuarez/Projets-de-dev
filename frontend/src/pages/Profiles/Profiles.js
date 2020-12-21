import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProfile from 'src/common/components/CardProfile';
import { useHistory } from 'react-router-dom';
import { getProfileRoute } from 'src/common/routing/routesResolver';
import { isEmpty } from 'lodash';
import SearchBar from 'src/common/components/SearchBar';
import headerImage from './header-home.jpg';


const Profiles = ({
  classes,
  getProfiles,
  profiles,
  loading,
  isLogged,
  clearState,
}) => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const arrayProfiles = Object.values(profiles);
  const [searchResults, setSearchResults] = useState(arrayProfiles);

  useEffect(() => {
    clearState();
    getProfiles();
  }, []);

  const handleClickCard = (id) => {
    history.push(getProfileRoute(id));
  };

  // SearchBar
  const helperText = 'Aucun résultat ne correspond à la recherche';
  const handleChange = (event, value) => {
    setInputValue(value);
    if (!isEmpty(value)) {
      setSearchResults(
        arrayProfiles.filter(
          (profile) => (
            Object.keys(profile).some(
              () => (
                profile.username.toLowerCase().includes(value.toLowerCase())),
            )
          ),
        ),
      );
    }
    else {
      setSearchResults(arrayProfiles);
    }
  };

  return (
    <Base loading={loading}>
      <img className={classes.image} src={headerImage} alt="header" style={{backgroundPosition: 'left'}} />
      <div className={classes.headerContainer}>
        <h2 className={classes.subtitle}>Liste des Profils</h2>
        <SearchBar
          className={classes.searchBar}
          onInputChange={(event, value) => handleChange(event, value)}
          items={arrayProfiles}
          label="Recherchez un utilisateur..."
          helperText={isEmpty(searchResults) && !isEmpty(inputValue) ? helperText : ''}
        />
      </div>
      <div className={classes.listCard}>
        {searchResults.length > 0
          && searchResults.map((profile) => (
            <CardProfile
              {...profile}
              key={profile.id}
              onClick={() => handleClickCard(profile.id)}
              isLogged={isLogged}
            />
          ))}
        {searchResults.length === 0
          && arrayProfiles.map((profile) => (
            <CardProfile
              {...profile}
              key={profile.id}
              onClick={() => handleClickCard(profile.id)}
              isLogged={isLogged}
            />
          ))}
      </div>
    </Base>
  );
};

Profiles.propTypes = {
  ...classesProps,
  getProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.shape({
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  clearState: PropTypes.func.isRequired,
};

export default Profiles;
