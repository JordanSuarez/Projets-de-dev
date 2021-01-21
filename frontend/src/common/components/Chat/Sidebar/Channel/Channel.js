import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ForumIcon from '@material-ui/icons/Forum';

const Channel = ({
  classes,
  loading,
  setStatus,
  status,
}) => {
  /* ---------------------- a stocker dans le state ---------------------------- */
  // Viewing the channel list
  // if width> 960 display on the left
  // otherwise button display of the button to open the list
  const [showChannelsList, setShowChannelsList] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  useEffect(() => {
    if (width > 960) {
      setShowChannelsList(true);
    }
    else {
      setShowChannelsList(false);
    }
  }, [width]);
  /* ------------------------------------------------------ */

  const closedListChannels = () => {
    setStatus('menuOpen');
  };
  return (
    <>
      {((status === 'channelsListOpen') || (showChannelsList === true)) && (
      <div className={classes.containerChannels}>
        {width < 960 && (
          <Button className={classes.closedListChannel} onClick={closedListChannels}>
            <CloseIcon />
          </Button>
        )}
        {((width > 960) && (status === 'channelsListOpen' || status === 'chatOpen' || ((width > 1280) && status === 'userProfileOpen') || ((width > 1280) && status === 'usersListOpen'))) && (
          <h4 className={classes.title}>
            {(width < 960 || width > 1280) && (
            <ForumIcon className={classes.channelIcon} />
            )}
            Liste des salons
          </h4>
        )}
        <div className={classes.channelsList}>
          <div className={classes.channelItem}>
            <p className={classes.channel}># Général</p>
            <ChevronRightIcon className={classes.menuItemArrow} />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

Channel.propTypes = {
  ...classesProps,
  loading: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Channel;
