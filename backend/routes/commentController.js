const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


module.exports = {


  new: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide' });
    }

    const content = req.body.content;
    const projectId	 = req.body.projectId;


    if (content == null || userId == null || projectId == null) {
      return res.status(500).json({'error': 'Requête invalide'});
    }
  
      asyncLib.waterfall([
        (done) => {
          const newComment = models.Comment.create({
            content:content,
            UserId:userId,
            ProjectId:projectId,
          })
          .then ((newComment) => {
            return res.status(201).json({
              'status': 'Commentaire ajouté avec succès'
            }).catch((err) => {
              return res.status(500).json({'error': err});
            })
          })
          .catch((err) => {
            return res.status(500).json({'error':  err});
          });
        }
      ])
},

edit: (req, res) => {

  const headerAuth = req.headers['authorization'];
  const userId = jwtUtils.getUserId(headerAuth);

  if (userId < 0){
    return res.status(400).json({ 'error': 'Le token est invalide' });
  }

  const id = req.params.id;
  const content = req.body.content;
  const projectId	 = req.body.projectId;


    asyncLib.waterfall([
      (done) => {
        models.Comment.findOne({
          where: { id: id, userId: userId, projectId: projectId }
        })
        .then((commentEdit) => {
          commentEdit.update({
            content: (content ? content : commentEdit.content),
          })
          .then((editComment) => {
            done(editComment)
            return res.status(201).json({
              editComment
            })
          })
          .catch(function(err) {
          return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + err });
        });
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': /*'Accès non autorisé'*/ err });
        });
        
      },
    ]);
  }
}