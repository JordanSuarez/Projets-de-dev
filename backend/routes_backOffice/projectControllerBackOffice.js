const { Op, where } = require("sequelize");
const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');

module.exports = {

  updateProject: (req, res) => {
    const id = req.params.id;

    const updatedProject = {
      id: parseInt(req.params.id, 10),
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      githubLink: req.body.githubLink,
      projectLink: req.body.projectLink,
      tagId: req.body.tag1,
      tag2Id: req.body.tag2,
      tag3Id: req.body.tag3,
      tag4Id: req.body.tag4,
      tag5Id: req.body.tag5,
      tag6Id: req.body.tag6,
  };

    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    if (isAdmin == true) {

      models.Project.update(updatedProject, 
        {where: {id: id}
      }).then(() => {
          return res.status(201).json(updatedProject)
        }).catch(error => {
          return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + error });
        })
    } else {
			return res.status(401).json({'error': '' });
		}
  },

  deleteProject: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
    const projectId = req.params.id

    if (isAdmin == true) {
				
      models.Project.findOne({
        where: {id: projectId}
      }).then(() => {
        models.Comment.destroy({
          where: {ProjectId: projectId}
        })
      }).then(() => {
        models.Project.destroy({
          where: {id: projectId}
        }).then(() => {
          return res.status(200).json({ message: 'Votre projet a bien été supprimé' });
        }).catch(() => {
          return res.status(400).json({ 'error': 'La requête n\'a pas pu aboutir' });
        });
  
      }).catch((error) => {
  
        res.status(500).json({ 'Error' : 'Impossible de supprimer le projet'});
  
      })
      
    } else {
			return res.status(401).json({'error': '' });
		}
  },
}