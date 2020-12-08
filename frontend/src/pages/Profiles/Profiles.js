/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProfile from 'src/common/components/CardProfile';

const Profiles = ({
  classes,
  getProfiles,
  profiles,
  loading,
}) => {
  useEffect(() => {
    getProfiles();
  }, []);
  const arrayProfiles = Object.values(profiles);

  return (
    <Base loading={loading}>
      <div className={classes.listCard}>
        {arrayProfiles.map((profile) => (
          <CardProfile {...profile} key={profile.id} />
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
