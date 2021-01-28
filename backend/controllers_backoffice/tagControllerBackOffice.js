const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  getTagList: (req, res) => {
    models.Tag.findAll({}).then((tagList) => {
      const tagArray = Object.values(tagList);
      res.set('X-Total-Count', tagArray.length);
      return res.status(201).json(tagArray);
    }).catch((err) => {
      res.status(404).json({
        'error': 'Impossible de récupérer les tags' + err
      });
    })
  },


  createTag: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    if (isAdmin) {
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
        res.status(500).json({
          'error': 'Impossible de créer le tag'
        });
      });
    }
  },


  getTagbyId: (req, res) => {
    models.Tag.findOne({
      attributes: ['id', 'name', 'image'],
      where: {
        id: req.params.id
      },
      include: [{
        model: models.Project,
        where: {
          [Op.or]: [{
              tagId: req.params.id
            },
            {
              tag2Id: req.params.id
            },
            {
              tag3Id: req.params.id
            },
            {
              tag4Id: req.params.id
            },
            {
              tag5Id: req.params.id
            },
            {
              tag6Id: req.params.id
            }
          ]
        },
        attributes: ['id'],
        required: false
      }, ]

    }).then((tag) => {
      console.log(tag.Projects);
      if (tag.Projects.length !== 0) {
        tag = {
          "id": 63,
          "name": "une categorie de test",
          "image": null,
          ProjectAssociated: true
        }
        return res.status(201).json(tag);
      } else {
        tag = {
          "id": tag.id,
          "name": tag.name,
          "image": tag.image,
          ProjectAssociated: false
        }
      }
      return res.status(201).json(tag);

    }).catch((err) => {
      res.status(404).json({
        'error': 'Impossible de récupérer les tags' + err
      });
    })
  },


  updateTag: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
    const id = req.params.id;

    if (isAdmin == true) {
      const updateTag = {
        id: req.params.id,
        name: req.body.name
      }

      models.Tag.update(updateTag, {
          where: {
            id: id
          },
        }).then(() => {
          return res.status(201).json(updateTag);
        })
        .catch((err) => {
          return res.status(500).json({
            'error': 'Erreur dans les données saisis :' + err
          });
        });
    } else {
      return res.status(401).json({
        'error': ''
      });
    }
  },

  deleteTag: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
    const tagId = req.params.id

    if (isAdmin == true) {
      models.Tag.destroy({
        where: {
          id: tagId
        }
      }).then(() => {
        return res.status(200).json({
          'message': 'Le tag a bien été supprimé'
        });
      }).catch((err) => {
        return res.status(400).json({
          'error': 'La requête n\'a pas pu aboutir' + err
        });
      })
    } else {
      return res.status(401).json({
        'error': ''
      });
    }
  },
}