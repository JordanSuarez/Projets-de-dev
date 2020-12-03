const express = require('express');
const userController = require('./routes/userController');
const projectController = require('./routes/projectController');


// Router
exports.router = (() => {
  const apiRouter = express.Router();

    // Users routes
    apiRouter.route('/users/register/').post(userController.register);
    apiRouter.route('/users/login/').post(userController.login);
    apiRouter.route('/projects/').get(projectController.index);
    apiRouter.route('/projects/:id').get(projectController.project);
    apiRouter.route('/projects/new').post(projectController.new);
    apiRouter.route('/projects/:id/edit').patch(projectController.edit);
    apiRouter.route('/projects/tags/:tag').get(projectController.filter); // Ne fonctionne pas encore, en cours
    apiRouter.route('/projects/:limit?/:offset?').get(projectController.limitOffset);

    return apiRouter;
})();