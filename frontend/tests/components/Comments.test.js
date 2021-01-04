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
  it('has title', () => {
    const title = wrapper.find('h4');
    expect(title).to.have.lengthOf(1);
    expect(isLogged).to.equal(true);
    expect(title.props()).to.have.property('children', ' Ajouter un commentaire: ');
  });
  it('has textfield', () => {
    const eventObj = { currentTarget: { value: 'test du commentaire' } };
    const textField = wrapper.find(TextField);
    expect(textField).to.have.lengthOf(1);

    expect(textField.props().value).to.equal(inputMessage);
  });
  it('has image', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.lengthOf(1);

    expect(avatar.props()).to.have.property('src', avatarSrc);
  });
});
