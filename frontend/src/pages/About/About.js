import { bool } from 'prop-types';
import React from 'react';

import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardAbout from 'src/common/components/CardAbout';
import headerImage from 'src/common/assets/images/header-about.png';
import datas from './data';

const About = ({ classes, isLogged }) => (
  <Base>
    <img className={classes.image} src={headerImage} alt="header" />
    <div className={classes.about}>
      <h2 className={classes.subtitle}> Equipe de dev</h2>
      <div className={classes.listCard}>
        {datas.map((data) => (
          <CardAbout {...data} key={data.name} isLogged={isLogged} />
        ))}
      </div>
    </div>
  </Base>
);

About.propTypes = {
  ...classesProps,
  isLogged: bool.isRequired,
};

export default About;
