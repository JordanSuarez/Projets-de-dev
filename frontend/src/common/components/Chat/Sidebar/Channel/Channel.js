import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListSubheader,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { classes as classesProps } from 'src/common/classes';

const Channel = ({
  classes,
  setChoiceChannel,

}) => {
  // afficher ou cacher la liste
  const [showChannel, setshowChannel] = useState(true);

  useEffect(() => {
  }, [showChannel]);

  const handleClick = () => {
    setshowChannel(!showChannel);
  };

  const choiceChannel = (id) => {
    console.log(id);
    setChoiceChannel(id);
  };
  // TODO
  // - boucle sur les channels de table channel
  // - CSS
  return (
    <>
      <div className={classes.menu}>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.channel}
        >
          <ListItem onClick={handleClick}>
            Salons
            {showChannel === false && (
            <KeyboardArrowDownIcon />
            )}
            {showChannel === true && (
            <KeyboardArrowUpIcon />
            )}
          </ListItem>
          {showChannel === true && (
            <List className={classes.listChannel}>
              <ListItem
                className={classes.itemChannel}
                onClick={() => choiceChannel(1)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  HTML / CSS
                </ListItemText>
              </ListItem>

              <ListItem
                className={classes.itemChannel}
                onClick={() => choiceChannel(2)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  React
                </ListItemText>
              </ListItem>

              <ListItem
                className={classes.itemChannel}
                onClick={() => choiceChannel(3)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  NodeJs
                </ListItemText>
              </ListItem>

              <ListItem
                className={classes.itemChannel}
                onClick={() => choiceChannel(4)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  Socket.io
                </ListItemText>
              </ListItem>

              <ListItem
                className={classes.itemChannel}
                onClick={() => choiceChannel(4)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  Wordpress
                </ListItemText>
              </ListItem>

              <ListItem
                className={classes.itemChannel}
                onClick={() => choiceChannel(4)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  Symfony
                </ListItemText>
              </ListItem>
            </List>
          )}
        </List>
      </div>
    </>
  );
};

Channel.propTypes = {
  ...classesProps,
  setChoiceChannel: PropTypes.func.isRequired,
};

Channel.defaultProps = {

};

export default Channel;
