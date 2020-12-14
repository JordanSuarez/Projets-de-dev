const express = require('express');
const userController = require('./routes/userController');
const projectController = require('./routes/projectController');
const tagController = require('./routes/tagController');
const commentController = require('./routes/commentController');
const likeController = require('./routes/likeController');


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

    apiRouter.route('/projects/:id/delete-my-project').delete(projectController.deleteMyProject); // OK

    // Likes routes
    apiRouter.route('/projects/:projectId/vote/like').post(likeController.likePost); // OK
    apiRouter.route('/projects/:projectId/vote/dislike').post(likeController.unlikePost); // OK
   

    // Tags routes
    apiRouter.route('/tags').get(tagController.getTagList); // OK

    // Comments routes
    apiRouter.route('/comments/add').post(commentController.new); // OK
    apiRouter.route('/comments/:id/edit').patch(commentController.edit); // OK
    apiRouter.route('/comments/:id/delete').delete(commentController.deleteComment); // OK

    // Admin routes
    apiRouter.route('/users/:id/delete').delete(userController.deleteUser); // OK
    apiRouter.route('/projects/:id/delete').delete(projectController.deleteProject); //OK

    return apiRouter;
})();