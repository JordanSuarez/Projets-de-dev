const { Op, where } = require("sequelize");
const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


module.exports = {

  allProjects: (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    let tag1 = req.query.tag1;


      whereClause = {
        [Op.or]: [
          { tagId: req.query.tag1 },
          { tag2Id: req.query.tag1 },
          { tag3Id: req.query.tag1 },
          { tag4Id: req.query.tag1 },
          { tag5Id: req.query.tag1 },
          { tag6Id: req.query.tag1 },
        ]
      };

    models.Project.findAll({
      limit: (limit ? parseInt(limit) : 999),
      offset: (offset ? parseInt(offset) : 0),
      where: (tag1 ? whereClause : null),
      order: [
        ['createdAt', 'DESC'],
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

  project: (req, res) => {

    models.Project.findOne({
      where : {id : req.params.id},
      include: [
        {model: models.Tag, all:true},
        {model: models.User, attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email'],}},
        {model: models.Comment, attributes: { exclude: ['ProjectId','UserId']}, include: {model: models.User, attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email'],}}}
      ]
      
    })
    .then((project) => {
        const formatProject = {
          id: project.id,
          title: project.title,
          description: project.description,
          githubLink: project.github_link,
          projectLink: project.project_link,
          image: project.image,
          vote: project.vote,
          tags: [
            project.Tag,
            project.Tag2,
            project.Tag3,
            project.Tag4,
            project.Tag5,
            project.Tag6,
          ],
          user: project.User,
          comments: project.Comments,
          createdAt: project.createdAt,
        };
        return res.status(200).json(formatProject)
    })
    .catch((error) => {
    return res.status(500).json(error)
    })
  },

  new: (req, res) => {


    const title = req.body.title;
    const description	 = req.body.description;
    const image	 = req.body.image;
    const githubLink	 = req.body.githubLink;
    const projectLink	 = req.body.projectLink;
    const tagId	 = req.body.tag1;
    const tag2Id	 = req.body.tag2;
    const tag3Id	 = req.body.tag3;
    const tag4Id	 = req.body.tag4;
    const tag5Id	 = req.body.tag5;
    const tag6Id	 = req.body.tag6;

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide' });
    }

    if (description == null || title == null || image == null || tagId == null) {
      return res.status(500).json({'error': 'Titre, description, image et au moins 1 tag requis'});
    }

  
      asyncLib.waterfall([
        (done) => {
          const newProject = models.Project.create({
            title:title,
            description:description,
            image:image,
            github_link: githubLink,
            project_link: projectLink,
            UserId: userId,
            TagId:tagId,
            Tag2Id: tag2Id,
            Tag3Id: tag3Id,
            Tag4Id: tag4Id,
            Tag5Id: tag5Id,
            Tag6Id: tag6Id,
          })
          .then ((newProject) => {
            //done(newProject);
            return res.status(201).json({
              'title': title,
              'description': description,
              'image': image,
              'github_link': githubLink,
              'project_link': projectLink,
              'userId': userId,
              'Tag1': tagId,
              'Tag2': tag2Id,
              'Tag3': tag3Id,
              'Tag4': tag4Id,
              'Tag5': tag5Id,
              'Tag6': tag6Id,
              'status': 'Projet ajouté avec succès'
            })
          })
          .catch((err) => {
            return res.status(500).json({'error': 'Erreur lors de l\'ajout du nouveau projet: ' + err});
          });
        }
      ])
  },

  edit: (req, res) => {
    const id = req.params.id;

    const updatedProject = {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      github_link: req.body.githubLink,
      project_link: req.body.projectLink,
      TagId: req.body.tag1,
      Tag2Id: req.body.tag2 ? req.body.tag2 : null,
      Tag3Id: req.body.tag3 ? req.body.tag3 : null,
      Tag4Id: req.body.tag4 ? req.body.tag4 : null,
      Tag5Id: req.body.tag5 ? req.body.tag5 : null,
      Tag6Id: req.body.tag6 ? req.body.tag6 : null,
  };

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (UserId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide'});
      } 

    models.Project.update(updatedProject, 
      {where: {id: id, userId: userId}
    }).then(() => {
        return res.status(201).json({updatedProject})
      }).catch(error => {
        return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + error });
      })
  },

  deleteMyProject: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);
    
    if (userId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide' });
    }


    models.Project.findOne({

      where: {id: req.params.id, userId: userId}

    }).then((findProject) => {

      models.Comment.destroy({
        where: {ProjectId: req.params.id}
      })

    }).then((commentsDelete) => {

      models.Project.destroy({
        where: {id: req.params.id, userId: userId}
      }).then(() => {
        return res.status(200).json({ message: 'Votre projet a bien été supprimé' });
      }).catch(() => {
        return res.status(400).json({ 'error': 'La requête n\'a pas pu aboutir' });
      });

    }).catch((error) => {

      res.status(500).json({ 'Error' : 'Impossible de supprimer le projet'});

    })
  },
 
  deleteProject: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    if (userId > 0 && isAdmin == true) {
				
      models.Project.destroy({
        where: {id: req.params.id }
      }).then(() => {
        return res.status(200).json({ 'message': 'Le projet a bien été supprimé' });
      }).catch((err) => {
        return res.status(400).json({'error' : 'La requête n\'a pas pu aboutir' + err});
      })
      
    } else {
      return res.status(401).json({'error': 'vous n\'avez pas l\'autorisation de supprimer ce projet' });
    }
  },
}
