import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import { classes } from 'src/common/classes';
import { TextField, Avatar } from '@material-ui/core';
import Comments from 'src/common/components/Comments/Comments';

const comments = [];
const idProject = 1;
const handleComment = (content, projectId) => ({
  content,
  projectId,
});
const handleCommentUpdate = () => {};
const handleCommentDelete = () => {};
const isLogged = true;
const userId = 2;
const redirect = '';
const inputMessage = 'test du commentaire';
const wrapper = shallow(
  <Comments
    classes={classes}
    comments={comments}
    handleComment={handleComment}
    handleCommentUpdate={handleCommentUpdate}
    handleCommentDelete={handleCommentDelete}
    idProject={idProject}
    isLogged={isLogged}
    userId={userId}
    redirect={redirect}
  />,
);

describe('<Comment />', () => {
  it('should display title if user is logged', () => {
    const title = wrapper.find('h4');
    expect(title).to.have.lengthOf(1);
    expect(isLogged).to.equal(true);
    expect(title.props()).to.have.property('children', ' Ajouter un commentaire: ');
  });
  it('should change TextField value on user input', () => {
    wrapper.find(TextField).simulate('change', { target: { value: 'test du commentaire' } });
    const textField = wrapper.find(TextField);

    expect(textField.prop('value')).to.equal(inputMessage);
  });
});
