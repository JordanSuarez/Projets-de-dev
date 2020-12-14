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
  connectWebSocket,
  getChannels,
  channels,
}) => {
  // afficher ou cacher la liste
  const [showChannel, setshowChannel] = useState(true);

  useEffect(() => {
    getChannels();
  }, [showChannel]);

  const handleClick = () => {
    setshowChannel(!showChannel);
  };

  const choiceChannel = (channel) => {
    connectWebSocket(channel.id);
    setChoiceChannel(channel);
  };

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
              {channels.map((channel) => (
                <ListItem
                  key={channel.id}
                  className={classes.itemChannel}
                  onClick={() => choiceChannel(channel)}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText>
                    {channel.name}
                  </ListItemText>
                </ListItem>
              ))}
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
  connectWebSocket: PropTypes.func.isRequired,
  channels: PropTypes.array.isRequired,
};

Channel.defaultProps = {

};

export default Channel;
