const jwtUtils = require('../utils/jwt.utils');
const models   = require('../models');
const asyncLib = require('async');

module.exports = {

    
    createTag: (req, res) => {

        const headerAuth = req.headers['authorization'];
        const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

        if(isAdmin) {

            models.Tag.create({
                name: req.body.name,
            }).then((createdTag) => {
                return res.status(201).json({ 'message': 'Le tag ' + createdTag + ' a bien été créé' });
            }).catch(() => {
                res.status(500).json({ 'error': 'Impossible de créer le tag' });
            });
        }
    },

    updateTag: (req, res) => {

        const headerAuth = req.headers['authorization'];
        const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
    
        if (isAdmin == true) {
    
          const tagId = req.params.id;
          const tagName = req.body.name;
          
          models.Tag.findOne({
            where: { id: tagId}
          })
          .then((tagEdit) => {
            tagEdit.update({
              name: (tagName ? tagName : tagEdit.name),
            })
            .then(() => {
              return res.status(201).json({tagEdit})
            })
            .catch(function(err) {
              return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + err });
            });
          })
          .catch(function(err) {
            return res.status(500).json({ 'error': /*'Accès non autorisé'*/ err });
          });
        } else {
            return res.status(401).json({'error': '' });
        }
    },

    deleteTag: (req, res) => {

        const headerAuth = req.headers['authorization'];
        const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
        const tagId = req.params.id
    
        if (isAdmin == true) {
        
            models.Tag.destroy({
              where: {id: tagId}
            }).then(() => {
              return res.status(200).json({ 'message': 'Le tag a bien été supprimé' });
            }).catch((err) => {
              return res.status(400).json({'error' : 'La requête n\'a pas pu aboutir' + err});
            })
        } else {
            return res.status(401).json({'error': '' });
        }
    },
}