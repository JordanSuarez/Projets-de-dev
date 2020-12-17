const { Op, where } = require("sequelize");
const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');

module.exports = {

  getMessagesList: (req, res) => {
    models.Message.findAll({
      attributes: ['id', 'content', 'userId', 'createdAt'],
      include: {
        all:true, 
        attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email', 'bio', 'createdAt'],
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