const jwtUtils = require('../utils/jwt.utils');
const models   = require('../models');
const asyncLib = require('async');

module.exports = {
  getTagList: (req, res) => {
    models.Tag.findAll({
      attributes: ['id', 'name', 'image'],
    }).then((tagList) => {
      const tagArray = Object.values(tagList);
      res.set('X-Total-Count', tagArray.length);
      return res.status(201).json(tagArray);
    }).catch((err) => {
      res.status(404).json({'error': 'Impossible de récupérer les tags' + err });
    })
  },

  getTagbyId: (req, res) => {
    models.Tag.findOne({
      attributes: ['id', 'name', 'image'],
      where : {id : req.params.id},
    }).then((tag) => {
      return res.status(201).json(tag);
    }).catch((err) => {
      res.status(404).json({'error': 'Impossible de récupérer les tags' + err });
    })
  },
}