const models   = require('../models');


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
  }
}