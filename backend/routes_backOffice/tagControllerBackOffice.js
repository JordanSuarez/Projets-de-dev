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
              const tag = {
              id: createdTag.id,
              name: createdTag.name
            }
              console.log(createdTag)
            
                return res.status(201).json(tag);
            }).catch(() => {
                res.status(500).json({ 'error': 'Impossible de créer le tag' });
            });
        }
    },

    updateTag: (req, res) => {

        const headerAuth = req.headers['authorization'];
        const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
        const id = req.params.id;

        if (isAdmin == true) {
    
          const updateTag = {
            id: req.params.id,
            name : req.body.name
          }

          models.Tag.update(updateTag, 
            {where: {id: id}
          }).then(() => {
              return res.status(201).json(updateTag);
            })
            .catch((err) => {
              return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + err });
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