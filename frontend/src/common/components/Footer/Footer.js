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
      <div className={classes.list}>
        <span
          className={classes.footerLinks}
          name="home"
          onClick={handleHome}
        >
          Accueil
        </span>
        <span
          className={classes.footerLinks}
          name="contact"
          onClick={handleHome}
        >
          Nous Contacter
        </span>
        <span
          className={classes.footerLinks}
          name="mention-legales"
          onClick={handleHome}
        >
          Mentions légales
        </span>
        <span
          className={classes.footerLinks}
          name="a-propos"
          onClick={handleHome}
        >
          À Propos
        </span>
      </div>

      <div className={classes.icons}>
        <i className="fab fa-facebook-square" />
        <i className="fab fa-twitter-square" />
        <i className="fab fa-instagram-square" />
        <i className="fab fa-github-square" />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  ...classesProps,
};

export default Footer;
