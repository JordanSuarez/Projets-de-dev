const express = require('express');
const userController = require('./routes/userController');
const projectController = require('./routes/projectController');


// Router
exports.router = (() => {
  const apiRouter = express.Router();

    // Users routes
    apiRouter.route('/users').get(userController.getUsersList); // OK
    apiRouter.route('/users/register/').post(userController.register); // OK
    apiRouter.route('/users/login/').post(userController.login); // OK
    apiRouter.route('/users/me').get(userController.getUserProfile); // OK
    // Projects routes
    apiRouter.route('/projects/').get(projectController.allProjects); // OK
    apiRouter.route('/projects/:id').get(projectController.project); // OK
    apiRouter.route('/projects/new').post(projectController.new); // OK
    apiRouter.route('/projects/:id/edit').patch(projectController.edit); // OK

    return apiRouter;
})();