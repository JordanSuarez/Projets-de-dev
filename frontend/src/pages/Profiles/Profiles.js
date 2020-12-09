import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProfile from 'src/common/components/CardProfile';
import { useHistory } from 'react-router-dom';
import { getProfileRoute } from 'src/common/routing/routesResolver';
import { isEmpty } from 'lodash';
import SearchBar from 'src/common/components/SearchBar';

const Profiles = ({
  classes,
  getProfiles,
  profiles,
  loading,
}) => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const arrayProfiles = Object.values(profiles);
  const [searchResults, setSearchResults] = useState(arrayProfiles);

  useEffect(() => {
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
          (profile) => {
            console.log(profile.username);
            return (
              Object.keys(profile).some(
                () => (
                  profile.username.toLowerCase().includes(value.toLowerCase())),
              )
            );
          },
        ),
      );
    }
    else {
      setSearchResults(arrayProfiles);
    }
  };

  return (
    <Base loading={loading}>
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
            />
          ))}
        {searchResults.length === 0
          && arrayProfiles.map((profile) => (
            <CardProfile
              {...profile}
              key={profile.id}
              onClick={() => handleClickCard(profile.id)}
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
};

export default Profiles;
