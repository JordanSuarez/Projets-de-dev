import React from 'react';
import { useHistory } from 'react-router-dom';
import { getLegalMentionRoute } from 'src/common/routing/routesResolver';
import { classes as classesProps } from 'src/common/classes';

// eslint-disable-next-line arrow-body-style
const Footer = ({ classes }) => {
  const history = useHistory();
  const handleHome = () => history.push(getLegalMentionRoute());

  return (
    <footer className={classes.footer}>
      <p className={classes.infos}>Projets de dev &#169;</p>
      <span
        className={classes.legalMention}
        name="mention-legales"
        onClick={handleHome}
        exact
      >
        Mentions légales
      </span>
    </footer>
  );
};

Footer.propTypes = {
  ...classesProps,
};

export default Footer;
