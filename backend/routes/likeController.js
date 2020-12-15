// Imports
const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');

const DISLIKED = 0;
const LIKED = 1;
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
          res.status(404).json({ 'error': 'impossible de liker, vous devez vous connecter'});
        }
      },
      (projectFound, userFound, done) => {
        if(userFound) {
          models.ProjectsLikes.findOne({
            where: {
              userId: userId,
              projectId: projectId,
            }
          })
          .then((userAlreadyLikedFound) => {
            done(null, projectFound, userFound, userAlreadyLikedFound);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'impossible de vérifier si l\'utilisateur a déjà liké' + err });
          });
        } else {
          res.status(404).json({ 'error': 'l\'utilisateur n\'existe pas'});
        }
      },
      (projectFound, userFound, userAlreadyLikedFound, done) => {
        if(!userAlreadyLikedFound) {
          projectFound.addUser(userFound, /*{ isLike: 1 }*/ )
          .then((alreadyLikedFound) => {
            done(null, projectFound, userFound);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'impossible de voter pour ce projet' + err });
          });
        } else {
          if (userAlreadyLikedFound.isLike === 0) {
            userAlreadyLikedFound.update({
              isLike: 1,
            })
            .then(() => {
              done(null, projectFound, userFound);
            })
            .catch((err) => {
              res.status(500).json({ 'error': 'impossible de mettre à jour le like' });
            });
          } else {
            res.status(409).json({ 'error': ' Vous avez déjà liké ce projet' });
          }
        }
      },
      (projectFound, userFound, done) => {
        projectFound.update({
          vote: projectFound.vote + 1,
        })
        .then(() => {
          done(projectFound);
        })
        .catch((err) => {
          res.status(500).json({ 'error': 'impossible de mettre à jour le compteur de likes' + err });
        });
      },
    ], (projectFound) => {
      if (projectFound) {
        return res.status(201).json(projectFound);
      } else {
        return res.status(500).json({ 'error': 'Impossible de mettre à jour le compteur' });
      }
    });
  },

  unlikePost: (req,res) => {
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
          res.status(404).json({ 'error': 'impossible de liker, vous devez vous connecter'});
        }
      },
      (projectFound, userFound, done) => {
        if(userFound) {
          models.ProjectsLikes.findOne({
            where: {
              userId: userId,
              projectId: projectId,
            }
          })
          .then((userAlreadyLikedFound) => {
            done(null, projectFound, userFound, userAlreadyLikedFound);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'impossible de vérifier si l\'utilisateur a déjà liké' });
          });
        } else {
          res.status(404).json({ 'error': 'l\'utilisateur n\'existe pas'});
        }
      },
      (projectFound, userFound, userAlreadyLikedFound, done) => {
        if(!userAlreadyLikedFound) {
          /*projectFound.addUser(userFound, { isLike: 0 })
          .then((alreadyLikedFound) => {
            done(null, projectFound, userFound);
          })
          .catch((err) => {*/
            return res.status(500).json({ 'error': 'impossible de voter pour ce projet' });
          //});
        } else {
          if (userAlreadyLikedFound.isLike === 1) {
            userAlreadyLikedFound.update({
              isLike: 0,
            })
            .then(() => {
              done(null, projectFound, userFound);
            })
            .catch((err) => {
              res.status(500).json({ 'error': 'impossible de mettre à jour le like' });
            });
          } else {
            res.status(409).json({ 'error': ' Vous avez déjà disliké ce projet' });
          }
        }
      },
      (projectFound, userFound, done) => {
        projectFound.update({
          vote: projectFound.vote - 1,
        })
        .then(() => {
          done(projectFound);
        })
        .catch((err) => {
          res.status(500).json({ 'error': 'impossible de mettre à jour le compteur de likes' + err });
        });
      },
    ], (projectFound) => {
      if (projectFound) {
        return res.status(201).json(projectFound);
      } else {
        return res.status(500).json({ 'error': 'Impossible de mettre à jour le compteur' });
      }
    });
  }
}