const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


module.exports = {

  index: (req, res) => {

    models.Project.findAll({
    })
    .then((project) => {
        return res.status(200).send(project)
    })
    .catch((error) => {
    return res.status(500).json('ERROR')
    })
  },

  project: (req, res) => {

    models.Project.findOne({
      where : {id : req.params.id}
    })
    .then((project) => {
        return res.status(200).send(project)
    })
    .catch((error) => {
    return res.status(500).json('ERROR')
    })
  },


}