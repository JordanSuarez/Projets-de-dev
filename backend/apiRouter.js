const express = require('express');
const userController = require('./routes/userController');

// Router
exports.router = (() => {
  const apiRouter = express.Router();

    // Users routes
    apiRouter.route('/users/register/').post(userController.register);
    apiRouter.route('/users/login/').post(userController.login);

    return apiRouter;
})();