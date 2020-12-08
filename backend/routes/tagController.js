const jwtUtils = require('../utils/jwt.utils');
const models   = require('../models');
const asyncLib = require('async');

module.exports = {
  getTagList: (req, res) => {
    models.Tag.findAll({
      attributes: ['id', 'name', 'image'],
    }).then((tagList) => {
      const tagArray = Object.values(tagList);
      return res.status(201).json(tagArray);
    }).catch((err) => {
      res.status(404).json({'error': 'Impossible de récupérer les tags' + err });
    })
  },
}