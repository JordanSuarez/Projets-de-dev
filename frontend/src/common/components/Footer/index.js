import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__infos">Projets de dev &#169;</p>
      <NavLink
        className="footer__legalMention"
        name="mention-legales"
        to="/legal-mention"
        exact
      >
        Mentions légales
      </NavLink>
    </footer>
  );
};

export default Footer;
