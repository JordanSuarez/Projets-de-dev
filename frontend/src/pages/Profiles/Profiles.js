/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProfile from 'src/common/components/CardProfile';
import { useHistory } from 'react-router-dom';
import { getProfileRoute } from 'src/common/routing/routesResolver';

const Profiles = ({
  classes,
  getProfiles,
  profiles,
  loading,
}) => {
  const history = useHistory();

  useEffect(() => {
    getProfiles();
  }, []);
  const arrayProfiles = Object.values(profiles);

  const handleClickCard = (id) => {
    history.push(getProfileRoute(id));
  };

  return (
    <Base loading={loading}>
      <h2 className={classes.subtitle}>Liste des Profils</h2>
      <div className={classes.listCard}>
        {arrayProfiles.map((profile) => (
          <CardProfile {...profile} key={profile.id} onClick={() => handleClickCard(profile.id)} />
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
