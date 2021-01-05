const { Op, where } = require("sequelize");
const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');

module.exports = {

  allProjects: (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    let order = req.query._order;
    let sort = req.query._sort;

    models.Project.findAll({
      limit: (limit ? parseInt(limit) : 999),
      offset: (offset ? parseInt(offset) : 0),
      order: [
        [sort, order],
      ],
      include: {
        all:true, 
        attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email'] 
        },
      },
    })
    .then((project) => {
      const formatProject = [];
        for (let element=0; element < project.length; element++) {
          const newFormat = {
            id: project[element].id,
            title: project[element].title,
            description: project[element].description,
            github_link: project[element].github_link,
            project_link: project[element].project_link,
            image: project[element].image,
            vote: project[element].vote,
            tags: [
              project[element].Tag,
              project[element].Tag2,
              project[element].Tag3,
              project[element].Tag4,
              project[element].Tag5,
              project[element].Tag6,
            ],
            user: project[element].User,
            comments: project[element].Comments
          };
          formatProject.push(newFormat)
        }
        const arrayAllProjects = Object.values(formatProject);
        res.set('X-Total-Count', arrayAllProjects.length);
        return res.status(200).json(formatProject)
    })
    .catch((error) => {
    return res.status(500).json(error)
    })
  },

  updateProject: (req, res) => {
    const id = req.params.id;

    const updatedProject = {
      id: parseInt(req.params.id, 10),
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      github_link: req.body.githubLink,
      project_link: req.body.projectLink,
      TagId: req.body.tags[0].id,
      Tag2Id: req.body.tags[1].id ? req.body.tags[1].id : null,
      Tag3Id: req.body.tags[2].id ? req.body.tags[2].id : null,
      Tag4Id: req.body.tags[3].id ? req.body.tags[3].id : null,
      Tag5Id: req.body.tags[4].id ? req.body.tags[4].id : null,
      Tag6Id: req.body.tags[5].id ? req.body.tags[5].id : null,
  };

  console.log(updatedProject)
    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);


    models.Project.update(updatedProject, 
      {where: {id: id}
    }).then(() => {
        return res.status(201).json(updatedProject)
      }).catch(error => {
        return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + error });
      })
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