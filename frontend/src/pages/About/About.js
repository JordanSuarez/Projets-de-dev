import React from 'react';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardAbout from 'src/common/components/CardAbout';

import datas from './data';
import headerImage from './header-image.png';

// eslint-disable-next-line arrow-body-style
const About = ({ classes }) => {
  return (
    <Base>
      <img className={classes.image} src={headerImage} alt="header" />
      <div className={classes.about}>
        <h2 className={classes.subtitle}> Equipe de dev</h2>
        <div className={classes.listCard}>
          {datas.map((data) => (
            <CardAbout {...data} key={data.profileLink} />
          ))}
        </div>
      </div>
    </Base>
  );
};

About.propTypes = {
  ...classesProps,
};

export default About;
