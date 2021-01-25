import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import { classes } from 'src/common/classes';
import { Typography, Avatar } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import CardAbout from 'src/common/components/CardAbout/CardAbout';

const name = 'toto';
const avatarSrc = 'src/common/assets/images/avatar.png';
const description = '';
const followLink = '';
const profileId = 1;
const isLogged = false;

const wrapper = shallow(
  <CardAbout
    name={name}
    avatar={avatarSrc}
    description={description}
    followLink={followLink}
    profileId={profileId}
    isLogged={isLogged}
    classes={classes}
  />,
);

describe('<CardAbout />', () => {
  it('should have a children who contain a username', () => {
    const typography = wrapper.find(Typography);
    expect(typography).to.have.lengthOf(2);

    expect((typography.first()).props()).to.have.property('children', name);
  });
  it('should have a children who contain a description', () => {
    const typography = wrapper.find(Typography);
    expect(typography).to.have.lengthOf(2);

    expect((typography.last()).props()).to.have.property('children', description);
  });
  it('should have a props src who contain an image', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.lengthOf(1);

    expect(avatar.props()).to.have.property('src', avatarSrc);
  });
  it('should not display GradeIcon if isLogged is false', () => {
    const cardActions = wrapper.find(GradeIcon);
    expect(cardActions).to.have.lengthOf(0);
  });
});
