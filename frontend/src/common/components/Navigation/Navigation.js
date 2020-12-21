import React, { useEffect, useState } from 'react';

import {
  AppBar, Button, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar,
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  getLogoutRoute,
  getLoginRoute,
  getAboutRoute,
  getProjectsListRoute,
  getProfilesListRoute,
  getUserProfileRoute,
  getContactRoute,
  getHomeRoute,
  getRegisterRoute,
} from 'src/common/routing/routesResolver';
import { classes as classesProps } from 'src/common/classes';
import { bool, func } from 'prop-types';
import { isUndefined } from 'lodash';
import { getToken } from 'src/common/authentication/authProvider';
import NavLink from './NavLink';

const Navigation = ({
  classes, isLogged, userAuthVerify, isNotLogged, setChatIsOpen,
}) => {
  const history = useHistory();
  const params = useParams();
  const [mainAnchorEl, setMainAnchorEl] = useState(null);
  const openMainMenu = Boolean(mainAnchorEl);

  useEffect(() => {
    // Scroll to the top of the page after redirection
    window.scrollTo(0, 0);

    // Check if user token is still valid, then refresh his status
    if (getToken()) {
      userAuthVerify(getToken());
    }
    if (!getToken()) {
      isNotLogged();
    }
  }, []);

  // Close burger menu
  const handleClose = (state) => state(null);

  const routes = [
    {
      name: 'Accueil', route: getHomeRoute(),
    },
    {
      name: 'Tous les projets', route: getProjectsListRoute(!isUndefined(params.offset) ? params.offset : 1),
    },
    {
      name: 'Tous les profils', route: getProfilesListRoute(),
    },
    {
      name: 'Contact', route: getContactRoute(),
    },
    {
      name: 'About', route: getAboutRoute(),
    },
  ];

  // Close Chat window
  const handleCloseChat = () => {
    setChatIsOpen('chatClosed');
  };

  // Routes
  const handlePushRoute = (route) => {
    handleCloseChat();
    history.push(route());
  };

  return (
    <AppBar position="sticky" color="inherit" className={classes.navigation}>
      <Toolbar>
        <Grid container wrap="nowrap">
          <Hidden mdUp>
            <IconButton
              edge="start"
              aria-label="menu"
              aria-controls="menu-appbar-types"
              aria-haspopup="true"
              onClick={(event) => setMainAnchorEl(event.currentTarget)}
            >
              <MenuIcon fontSize="large" className={classes.burger} />
            </IconButton>
            <Menu
              id="menu-appbar-types"
              anchorEl={mainAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMainMenu}
              onClose={() => handleClose(setMainAnchorEl)}
            >
              {routes.map(({ name, route }) => (
                <MenuItem key={name} onClick={handleCloseChat}>
                  <NavLink
                    label={name}
                    route={route}
                    activeClassName={classes.itemLinkActive}
                    className={classes.menuItem}
                  />
                </MenuItem>

              ))}
              <Hidden smUp>
                {isLogged
                  ? (
                    <MenuItem
                      onClick={() => handlePushRoute(getUserProfileRoute)}
                      className={classes.menuItem}
                    >
                      Profil
                    </MenuItem>
                  )
                  : (
                    <MenuItem
                      onClick={() => handlePushRoute(getLoginRoute)}
                      className={classes.menuItem}
                    >Connexion
                    </MenuItem>
                  )}
                {isLogged
                  ? (
                    <MenuItem
                      onClick={() => handlePushRoute(getLogoutRoute)}
                      className={classes.menuItem}
                    >
                      Se déconnecter
                    </MenuItem>
                  )
                  : (
                    <MenuItem
                      onClick={() => handlePushRoute(getRegisterRoute)}
                      className={classes.menuItem}
                    >
                      Inscription
                    </MenuItem>
                  )}
              </Hidden>
            </Menu>
          </Hidden>
          <Hidden smUp>
            <div className={classes.logoMobile} onClick={() => handlePushRoute(getHomeRoute)} />
          </Hidden>
          <Hidden smDown>
            <div className={classes.wrapper}>
              <div className={classes.logoDesktop} onClick={() => handlePushRoute(getHomeRoute)} />
              {routes.map(({
                name, route,
              }) => (
                <div onClick={handleCloseChat} key={name}>
                  <NavLink
                    label={name}
                    route={route}
                    activeClassName={classes.itemLinkActive}
                    className={classes.itemLink}
                  />
                </div>
              ))}
            </div>
          </Hidden>
          <Hidden xsDown>
            <Grid container alignItems="center" justify="flex-end" spacing={2}>
              <Grid item>
                {isLogged
                  ? <Button onClick={() => handlePushRoute(getUserProfileRoute)} label="Profil" variant="contained" className={classes.button}>Profil</Button>
                  : <Button onClick={() => handlePushRoute(getLoginRoute)} label="Connexion" variant="contained" className={classes.button}>Connexion</Button>}
              </Grid>
              <Grid item>
                {isLogged
                  ? <Button onClick={() => handlePushRoute(getLogoutRoute)} label="Se déconnecter" variant="contained" className={classes.button}>Se déconnecter</Button>
                  : <Button onClick={() => handlePushRoute(getRegisterRoute)} label="Connexion" variant="contained" className={classes.button}>Inscription</Button>}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {
  ...classesProps,
  isLogged: bool.isRequired,
  userAuthVerify: func.isRequired,
  isNotLogged: func.isRequired,
  setChatIsOpen: func.isRequired,
};

export default Navigation;
