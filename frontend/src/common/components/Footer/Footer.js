import React from 'react';
import { useHistory } from 'react-router-dom';
import { getLegalMentionRoute, getContactRoute, getAboutRoute, getHomeRoute } from 'src/common/routing/routesResolver';
import { classes as classesProps } from 'src/common/classes';

const Footer = ({ classes }) => {
  const history = useHistory();
  const handleMentions = () => history.push(getLegalMentionRoute());
  const handleContact = () => history.push(getContactRoute());
  const handleAbout = () => history.push(getAboutRoute());
  const handleHome = () => history.push(getHomeRoute());

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
          onClick={handleContact}
        >
          Nous contacter
        </span>
        <span
          className={classes.footerLinks}
          name="mention-legales"
          onClick={handleMentions}
        >
          Mentions légales
        </span>
        <span
          className={classes.footerLinks}
          name="a-propos"
          onClick={handleAbout}
        >
          À propos
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
