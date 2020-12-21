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
      <p className={classes.infos}>Projets de dev</p>
      <div>
      <span
        className={classes.legalMention}
        name="mention-legales"
        onClick={handleHome}
      >
        Accueil
      </span>
      <span
        className={classes.legalMention}
        name="mention-legales"
        onClick={handleHome}
      >
        Nous Contacter
      </span>
      <span
        className={classes.legalMention}
        name="mention-legales"
        onClick={handleHome}
      >
        Mentions légales
      </span>
      <span
        className={classes.legalMention}
        name="mention-legales"
        onClick={handleHome}
      >
        A Propos
      </span>
      </div>

      <div className={classes.icons}>
      <i className="fab fa-facebook-square"></i>
      <i className="fab fa-twitter-square"></i>
      <i className="fab fa-instagram-square"></i>
      <i className="fab fa-github-square"></i>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  ...classesProps,
};

export default Footer;
