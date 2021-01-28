const express = require('express');

// Controllers frontOffice
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');
const tagController = require('./controllers/tagController');
const commentController = require('./controllers/commentController');
const channelController = require('./controllers/channelController');
const messageController = require('./controllers/messageController');
const likeController = require('./controllers/likeController');
const contactController = require('./controllers/contactController');

// Controllers BackOffice
const userControllerBackOffice = require('./controllers_backoffice/userControllerBackOffice');
const projectControllerBackOffice = require('./controllers_backoffice/projectControllerBackOffice');
const tagControllerBackOffice = require('./controllers_backoffice/tagControllerBackOffice');
const commentControllerBackOffice = require('./controllers_backoffice/commentControllerBackOffice');
const contactControllerBackOffice = require('./controllers_backoffice/contactControllerBackOffice');
const messageControllerBackOffice = require('./controllers_backoffice/messageControllerBackOffice');

// Router
exports.router = (() => {
  const apiRouter = express.Router();

    // Users routes
    apiRouter.route('/users').get(userController.getUsersList); // OK
    apiRouter.route('/users/connected').post(userController.userAuthVerify); // OK
    apiRouter.route('/users/register/').post(userController.register); // OK
    apiRouter.route('/users/login/').post(userController.login); // OK
    apiRouter.route('/users/me').get(userController.getUserProfile); // OK
    apiRouter.route('/users/me/edit').patch(userController.updateUserProfile); // OK
    apiRouter.route('/users/me/delete').delete(userController.deleteMe); //OK
    apiRouter.route('/users/:id').get(userController.getUserById); // OK

    // Users Like
    apiRouter.route('/users/me/likes').get(likeController.getLikesByMe); // OK
    apiRouter.route('/users/:id/likes').get(likeController.getLikesByUserId); // OK
    apiRouter.route('/users/me/likes-projects').get(likeController.getLikesProjectByMe) // Ok
    
    // Projects routes
    apiRouter.route('/projects/').get(projectController.allProjects); // OK
    apiRouter.route('/projects/:id').get(projectController.project); // OK
    apiRouter.route('/projects/new').post(projectController.new); // OK
    apiRouter.route('/projects/:id/edit').patch(projectController.edit); // OK
    apiRouter.route('/projects/:id/delete-my-project').delete(projectController.deleteMyProject); // Ok
    
    // Tags routes
    apiRouter.route('/tags').get(tagController.getTagList); // OK
    apiRouter.route('/tags/:id').get(tagController.getTagbyId); // OK
    
    // Likes routes
    apiRouter.route('/projects/:projectId/vote/like').post(likeController.likePost); // OK
    apiRouter.route('/projects/:projectId/vote/dislike').post(likeController.unlikePost); // OK

    // Comments routes
    apiRouter.route('/comments/').get(commentController.commentsList);    
    apiRouter.route('/comments/:id').get(commentController.comment);    
    apiRouter.route('/comments/add').post(commentController.new); // OK
    apiRouter.route('/comments/:id/edit').patch(commentController.edit); // OK
    apiRouter.route('/comments/:id/delete').delete(commentController.deleteComment); // OK

    // Channels routes
    apiRouter.route('/channels').get(channelController.getChannelList); // OK
    apiRouter.route('/channels/:id').get(channelController.getChannel); // OK

    // Messages routes
    apiRouter.route('/messages').get(messageController.getMessagesList); // OK

    // Contact routes
    apiRouter.route('/contact').post(contactController.new); // OK

    
    // BackOffice routes:

    // Login Backoffice
    apiRouter.route('/backoffice/login').post(userControllerBackOffice.login); // OK

    // -Projects routes
    apiRouter.route('/backoffice/projects/').get(projectControllerBackOffice.allProjects); // OK
    apiRouter.route('/backoffice/projects/:id').get(projectController.project); // OK
    apiRouter.route('/backoffice/projects/:id').put(projectControllerBackOffice.updateProject); // OK
    apiRouter.route('/backoffice/projects/:id').delete(projectControllerBackOffice.deleteProject); //OK

    // -Comment routes
    apiRouter.route('/backoffice/comments/').get(commentController.commentsList);    
    apiRouter.route('/backoffice/comments/:id').get(commentController.comment);    
    apiRouter.route('/backoffice/comments/:id').put(commentControllerBackOffice.updateComment); // OK
    apiRouter.route('/backoffice/comments/:id').delete(commentControllerBackOffice.deleteComment); //OK

    // -Users routes
    apiRouter.route('/backoffice/users').get(userControllerBackOffice.getUsersList); // OK
    apiRouter.route('/backoffice/users/:id').get(userControllerBackOffice.getUserById); // OK
    apiRouter.route('/backoffice/users/:id').put(userControllerBackOffice.updateUser); // OK
    apiRouter.route('/backoffice/users/:id').delete(userControllerBackOffice.deleteUser); // OK

    // -Tags routes
    apiRouter.route('/backoffice/tags').get(tagControllerBackOffice.getTagList); // OK
    apiRouter.route('/backoffice/tags/:id').get(tagControllerBackOffice.getTagbyId); // OK
    apiRouter.route('/backoffice/tags/:id').put(tagControllerBackOffice.updateTag); // OK
    apiRouter.route('/backoffice/tags/:id').delete(tagControllerBackOffice.deleteTag); // OK
    apiRouter.route('/backoffice/tags').post(tagControllerBackOffice.createTag); // OK

    // -Contact routes
    apiRouter.route('/backoffice/contacts').get(contactControllerBackOffice.getContactList); // OK
    apiRouter.route('/backoffice/contacts/:id').get(contactControllerBackOffice.getContactById); // OK
    apiRouter.route('/backoffice/contacts/:id').delete(contactControllerBackOffice.deleteContact); // OK

    // -Messages routes
    apiRouter.route('/backoffice/messages').get(messageControllerBackOffice.getMessagesList); // OK
    apiRouter.route('/backoffice/messages/:id').delete(messageControllerBackOffice.deleteMessage);

    return apiRouter;
})();