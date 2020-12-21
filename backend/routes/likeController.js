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
          projectFound.addUser(userFound)
          .then((alreadyLikedFound) => {
            done(null, projectFound, userFound);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'impossible de voter pour ce projet' + err });
          });
        } else {
          if (userAlreadyLikedFound.isLike === DISLIKED) {
            userAlreadyLikedFound.update({
              isLike: LIKED,
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
            return res.status(500).json({ 'error': 'Vous ne pouvez pas disliker un projet que vous n\'avez pas liké' });
        } else {
          if (userAlreadyLikedFound.isLike === LIKED) {
            userAlreadyLikedFound.update({
              isLike: DISLIKED,
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
  },

  getLikesByUserId: (req, res) => {

    models.ProjectsLikes.findAll({

      where: {userId: req.params.id},
      attributes: ['id', 'userId', 'projectId', 'isLike'],
      

    }).then((likes) => {

      if(likes) {
        return res.status(200).json(likes)
      }

    })
  },

  getLikesByMe: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    models.ProjectsLikes.findAll({

      where: {userId: userId},
      attributes: ['id', 'userId', 'projectId', 'isLike'],
      }).then((likes) => {

        if(likes) {
          return res.status(200).json(likes)
        }

      })
  }, 

  getLikesProjectByMe: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    models.ProjectsLikes.findAll({

      where: {userId: userId},
      attributes: ['id', 'userId', 'projectId', 'isLike'],
      include: [
        {model: models.Project, all: true, required: false, 
          include: [{model: models.Tag, all:true}, {model: models.User, all:true, attributes: {exclude: ['createdAt', 'updatedAt', 'password', 'bio', 'isAdmin', 'email']}}]
        },
      ],

    }).then((projectLikes) => {
      if(projectLikes) {
        
        const formatLikesProjects = projectLikes.map((projectLike) => {
            const formatProject = {
              id: projectLike.project.id,
              title: projectLike.project.title,
              description: projectLike.project.description,
              image: projectLike.project.image,
              user: projectLike.project.User,
              tags: [
                projectLike.project.Tag,
                projectLike.project.Tag2,
                projectLike.project.Tag3,
                projectLike.project.Tag4,
                projectLike.project.Tag5,
                projectLike.project.Tag6,
              ],
              vote: projectLike.project.vote,
            };
            return formatGetLikesProject= {
              id: projectLike.id,
              isLike: projectLike.isLike,
              projectId: projectLike.projectId,
              userId:  projectLike.userId,
              project: formatProject,
            }
        })
        
        return res.status(200).json(formatLikesProjects)
        
      }

    }).catch(() => {})
  }
}