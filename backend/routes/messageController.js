const { Op, where } = require("sequelize");
const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');

module.exports = {

  getMessagesList: (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    models.Message.findAll({
      limit: (limit ? parseInt(limit) : 999),
      offset: (offset ? parseInt(offset) : 0),
      attributes: ['id', 'content', 'userId', 'createdAt'],
      include: {
        all:true, 
        attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email', 'createdAt'],
        where: {id: models.Message.userId}
      }
    }
    }).then((messages) => {
      return res.status(201).json(messages);
    }).catch((err) => {
      res.status(404).json({'error': 'Impossible de récupérer les messages' + err });
    })
  },
}