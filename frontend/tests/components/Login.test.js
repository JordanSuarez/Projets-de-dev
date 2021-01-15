import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import Login from 'src/pages/Login/Login';
import { TextField } from 'mui-rff';
import { classes } from 'src/common/classes';

describe('<Login />', () => {
  it('submits valid form', () => {
    const handleLogin = ({ email, password }) => ({
      email,
      password,
    });
    const changeHasError = (value) => value;
    const wrapper = shallow(
      <Login
        handleLogin={handleLogin}
        redirect=""
        initialValues={{ email: '', password: '' }}
        hasError={false}
        changeHasError={changeHasError}
        isLogged={false}
        classes={classes}
      />,
    );

    const email = wrapper.find(TextField);
    email.value = 'cerny@seznam.cz';

    const password = wrapper.find(TextField);
    password.value = '12345678';

    const inputValues = {
      email: email.value,
      password: password.value,
    };

    expect(handleLogin(inputValues)).to.deep.equal({ email: 'cerny@seznam.cz', password: '12345678' });
  });
});
