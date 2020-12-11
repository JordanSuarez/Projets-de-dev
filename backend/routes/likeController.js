// Imports
const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


// Routes

module.exports = {
  
  likePost: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    const projectId = parseInt(req.params.projectId);

    if (projectId <= 0) {
      return res.status(400).json({ 'error': 'paramètre invalide' + err });
    }

    asyncLib.waterfall([
      (done) => {
        models.Project.findOne({
          where: { id: projectId }
        })
        .then((projectFound) => {
          done(null, projectFound);
        })
        .catch((err) => {
          return res.status(500).json({ 'error': 'impossible de trouver le projet'});
        });
      },
      (projectFound, done) => {
        if(projectFound) {
          models.User.findOne({
            where: { id: userId },
          })
          .then((userFound) => {
            done(null, projectFound, userFound);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'impossible de vérifier l\'utilisateur'});
          })
        } else {
          res.status(404).json({ 'error': 'impossible de liker, vous devez vous conncter'});
        }
      },
      (projectFound, userFound, done) => {
        if(userFound) {
          models.ProjectsLikes.findOne({
            where: {
              userId: userId,
              messageId: messageId,
            }
          })
          .then((isUserAlreadyLiked) => {
            done(null, projectFound, userFound, isUserAlreadyLiked);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'impossible de vérifier si l\'utilisateur a déjà liké' });
          });
        } else {
          res.status(404).json({ 'error': 'l\'utilisateur n\'existe pas'});
        }
      }
    ])
  },

  unlikePost: (res,res) => {

  },
}