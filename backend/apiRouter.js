const express = require('express');
const userController = require('./routes/userController');
const projectController = require('./routes/projectController');


// Router
exports.router = (() => {
  const apiRouter = express.Router();

    // Users routes
    apiRouter.route('/users/register/').post(userController.register);
    apiRouter.route('/users/login/').post(userController.login);
    apiRouter.route('/users/me').get(userController.getUserProfile);
    // Projects routes
    apiRouter.route('/projects/').get(projectController.index);
    apiRouter.route('/projects/:id').get(projectController.project);
    apiRouter.route('/projects/new').post(projectController.new);
    apiRouter.route('/projects/:id/edit').patch(projectController.edit);
    apiRouter.route('/projects/tags/:tag1').get(projectController.filter);
    apiRouter.route('/projects/:limit?/:offset?').get(projectController.limitOffset);

    return apiRouter;
})();