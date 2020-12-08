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
              return res.status(500).json({'error': 'Erreur lors de l\'ajout du nouveau projet 2: ' + err});
            })
          })
          .catch((err) => {
            return res.status(500).json({'error': 'Erreur lors de l\'ajout du nouveau projet: ' + err});
          });
        }
      ])
},







}