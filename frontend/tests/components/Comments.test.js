import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import { classes } from 'src/common/classes';
import { TextField, Avatar } from '@material-ui/core';
import Comments from 'src/common/components/Comments/Comments';

const comments = [
  {
    id: 1,
    content: 'test du commentaire',
    createdAt: '2020-12-22 13:08:26.000',
    User: {
      username: 'toto',
      userImage: 'src/common/assets/images/avatar.png',
    },
  },
];
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
    // There is many h4 en Comment component, depend of comments length
    expect(title).to.have.lengthOf(comments.length + 1);
    expect(isLogged).to.equal(true);
    expect((title.first()).props()).to.have.property('children', ' Ajouter un commentaire: ');
  });
  it('should change TextField value on user input', () => {
    wrapper.find(TextField).simulate('change', { target: { value: 'test du commentaire' } });
    const textField = wrapper.find(TextField);
    expect(textField.prop('value')).to.equal(inputMessage);
  });
  it('should have a props src who contain a userImage', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.lengthOf(1);

    const comment = comments[0];
    expect(avatar.props()).to.have.property('src', comment.User.userImage);
  });
  it('should display username of author', () => {
    const commentUsername = wrapper.find('h4').at(1);
    const comment = comments[0];
    expect(commentUsername.props()).to.have.property('children', comment.User.username);
  });
  it('should display date when comment is posted', () => {
    const dateTime = wrapper.find('p').at(0);
    const comment = comments[0];
    expect(dateTime.props()).to.have.property('children', `Le ${new Date(comment.createdAt).toLocaleString('fr-FR')}`);
  });
  it('should display content of comment', () => {
    const commentContent = wrapper.find('p').at(1);
    const comment = comments[0];
    expect(commentContent.props()).to.have.property('children', comment.content);
  });
  it('should display TextField instead of message information when user is logged', () => {
    const textField = wrapper.find(TextField);
    expect(textField).to.not.have.lengthOf(0);

    const informationMessage = wrapper.find('p').at(0);
    expect(informationMessage.props()).to.not.have.property('children', ' Merci de vous connecter pour poster un commentaire');
  });
});
