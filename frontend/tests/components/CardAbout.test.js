import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import { classes } from 'src/common/classes';
import { Typography, Avatar } from '@material-ui/core';
import CardAbout from 'src/common/components/CardAbout/CardAbout';

const name = 'toto';
const avatarSrc = 'src/common/assets/images/avatar.png';
const description = '';
const followLink = '';
const profileId = 1;

const wrapper = shallow(
  <CardAbout
    name={name}
    avatar={avatarSrc}
    description={description}
    followLink={followLink}
    profileId={profileId}
    isLogged={false}
    classes={classes}
  />,
);

describe('<CardAbout />', () => {
  it('has name', () => {
    const typography = wrapper.find(Typography);
    expect(typography).to.have.lengthOf(2);

    expect((typography.first()).props()).to.have.property('children', name);
  });
  it('has description', () => {
    const typography = wrapper.find(Typography);
    expect(typography).to.have.lengthOf(2);

    expect((typography.last()).props()).to.have.property('children', description);
  });
  it('has image', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.lengthOf(1);

    expect(avatar.props()).to.have.property('src', avatarSrc);
  });
});
