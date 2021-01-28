const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');

module.exports = {
  commentsList: (req, res) => {
    models.Comment.findAll({
        include: {
          all: true
        }
      })
      .then((allComments) => {
        const arrayAllComments = Object.values(allComments);
        res.set('X-Total-Count', arrayAllComments.length);
        return res.status(200).json(allComments);
      }).catch((error) => {
        return res.status(500).json({
          'Error': 'Erreur lors de la récupréation des données, les commenataires n\'ont pas pu être récupérés'
        })
      })
  },


  comment: (req, res) => {
    models.Comment.findOne({
        include: {
          all: true
        },
        where: {
          id: req.params.id
        },
      })
      .then((comment) => {
        return res.status(200).json(comment);
      }).catch((error) => {
        return res.status(500).json({
          'Error': 'Erreur lors de la récupréation des données, les commenataires n\'ont pas pu être récupérés'
        })
      })
  },


  new: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);
    const content = req.body.content;
    const projectId = req.body.projectId;

    if (userId < 0) {
      return res.status(400).json({
        'error': 'Le token est invalide'
      });
    }
    if (content == null || userId == null || projectId == null) {
      return res.status(500).json({
        'error': 'Requête invalide'
      });
    }

    asyncLib.waterfall([
      (done) => {
        const newComment = models.Comment.create({
            content: content,
            UserId: userId,
            ProjectId: projectId,
          })
          .then((newComment) => {
            return res.status(201).json({
              'status': 'Commentaire ajouté avec succès'
            })
          })
          .catch((err) => {
            return res.status(500).json({
              'error': err
            });
          });
      }
    ])
  },

  edit: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);
    const id = req.params.id;
    const content = req.body.content;
    const projectId = req.body.projectId;

    if (userId < 0) {
      return res.status(400).json({
        'error': 'Le token est invalide'
      });
    }

    models.Comment.findOne({
        where: {
          id: id,
          userId: userId,
          projectId: projectId
        }
      })
      .then((commentEdit) => {
        commentEdit.update({
            content: (content ? content : commentEdit.content),
          })
          .then(() => {
            return res.status(201).json({
              commentEdit
            })
          })
          .catch(function (err) {
            return res.status(500).json({
              'error': 'Erreur dans les données saisis :' + err
            });
          });
      })
      .catch(function (err) {
        return res.status(500).json({
          'error': /*'Accès non autorisé'*/ err
        });
      });
  },


  deleteComment: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0) {
      return res.status(400).json({
        'error': 'Le token est invalide'
      });
    }

    models.Comment.destroy({
      where: {
        id: req.params.id,
        userId: userId
      }
    }).then(() => {
      return res.status(200).json({
        'message': 'Le commentaire a bien été supprimé'
      });
    }).catch((err) => {
      return res.status(400).json({
        'error': 'La requête n\'a pas pu aboutir' + err
      });
    })
  }
}