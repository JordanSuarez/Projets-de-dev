import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import { classes } from 'src/common/classes';
import ProfileEdition from 'src/pages/Profile/components/ProfileEdition/ProfileEdition';
import { Form } from 'react-final-form';

const getProfile = () => {};
const loading = false;
const userProfile = {
  id: 2,
  email: 'toto@test.com',
  username: 'toto',
  userImage: 'src/common/assets/images/avatar.png',
  projects: [],
};
const handleUpdate = () => {};
const redirect = '';
const initialValues = {
  username: 'toto',
  email: 'toto@test.com',
  bio: undefined,
  userImage: 'src/common/assets/images/avatar.png',
};

const wrapper = shallow(
  <ProfileEdition
    getProfile={getProfile}
    loading={loading}
    userProfile={userProfile}
    handleUpdate={handleUpdate}
    redirect={redirect}
    classes={classes}
  />
  ,
);

describe('<ProfileEdition />', () => {
  it('has name', () => {
    const reactFinalForm = wrapper.find(Form);
    expect(reactFinalForm).to.have.lengthOf(1);

    const initialValuesForm = expect((reactFinalForm).props()).__flags.object.initialValues;
    expect(initialValuesForm).to.include(initialValues);
  });
});
