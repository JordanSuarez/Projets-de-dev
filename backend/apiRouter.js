const express = require('express');

const userController = require('./routes/userController');
const projectController = require('./routes/projectController');
const tagController = require('./routes/tagController');
const commentController = require('./routes/commentController');
const channelController = require('./routes/channelController');
const messageController = require('./routes/messageController');
const likeController = require('./routes/likeController');

// Controllers BackOffice
const userControllerBackOffice = require('./routes_backOffice/userControllerBackOffice');
const projectControllerBackOffice = require('./routes_backOffice/projectControllerBackOffice');
const tagControllerBackOffice = require('./routes_backOffice/tagControllerBackOffice');
const commentControllerBackOffice = require('./routes_backOffice/commentControllerBackOffice');

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

    // BackOffice routes:
    // -Projects routes
    apiRouter.route('/backOffice/projects/').get(projectController.allProjects); // OK
    apiRouter.route('/backOffice/projects/:id').get(projectController.project); // OK
    apiRouter.route('/backOffice/projects/:id').put(projectControllerBackOffice.updateProject); // OK
    apiRouter.route('/backOffice/projects/:id').delete(projectControllerBackOffice.deleteProject); //OK

    // -Comment routes
    apiRouter.route('/backOffice/comments/').get(commentController.commentsList);    
    apiRouter.route('/backOffice/comments/:id').get(commentController.comment);    
    apiRouter.route('/backOffice/comments/:id').put(commentControllerBackOffice.updateComment); // OK
    apiRouter.route('/backOffice/comments/:id').delete(commentControllerBackOffice.deleteComment); //OK

    // -Users routes
    apiRouter.route('/backOffice/users').get(userController.getUsersList); // OK
    apiRouter.route('/backOffice/users/:id').get(userControllerBackOffice.getUserById); // OK
    apiRouter.route('/backOffice/users/:id').put(userControllerBackOffice.updateUser); // OK
    apiRouter.route('/backOffice/users/:id').delete(userControllerBackOffice.deleteUser); // OK

    // -Tags routes
    apiRouter.route('/backOffice/tags').get(tagController.getTagList); // OK
    apiRouter.route('/backOffice/tags/:id').get(tagController.getTagbyId); // OK
    apiRouter.route('/backOffice/tags/:id').put(tagControllerBackOffice.updateTag); // OK
    apiRouter.route('/backOffice/tags/:id').delete(tagControllerBackOffice.deleteTag); // OK
    apiRouter.route('/backOffice/tags').post(tagControllerBackOffice.createTag); // OK

    return apiRouter;
})();