const { Op, where } = require("sequelize");
const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


module.exports = {

  allProjects: (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    let whereClause = null;

    if (req.params.tag1 != '') {
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
      }

    models.Project.findAll({
      limit: (limit ? parseInt(limit) : 999),
      offset: (offset ? parseInt(offset) : 0),
      where: whereClause,
      include: {
        all:true, 
        attributes: { exclude: ['password', 'isAdmin', 'createdAt', 'updatedAt', 'email'] 
      },
      },
    })
    .then((project) => {
        return res.status(200).json(project)
    })
    .catch((error) => {
    return res.status(500).json(error)
    })
  },

  filter: (req, res) => {

    models.Project.findAll({ 

})
    .then((projectTags) => {
        return res.status(200).json(projectTags)
    })
    .catch((error) => {
    return res.status(500).json(error)
    })
  },

  project: (req, res) => {

    models.Project.findOne({
      where : {id : req.params.id},
      include: {
        all: true,
        attributes: { exclude: ['password', 'isAdmin', 'createdAt', 'updatedAt', 'email'] 
      },
      }
    })
    .then((project) => {
        return res.status(200).json(project)
    })
    .catch((error) => {
    return res.status(500).json('ERROR')
    })
  },

  new: (req, res) => {


    const title = req.body.title;
    const description	 = req.body.description;
    const image	 = req.body.image;
    const github_link	 = req.body.github_link;
    const project_link	 = req.body.project_link;
    const tagId	 = req.body.tag1;
    const tag2Id	 = req.body.tag2;
    const tag3Id	 = req.body.tag3;
    const tag4Id	 = req.body.tag4;
    const tag5Id	 = req.body.tag5;
    const tag6Id	 = req.body.tag6;

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (UserId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide'});
    } 

    if (description == null || title == null || image == null || tagId == null) {
      return res.status(500).json({'error':'Titre, description, image et au moins 1 tag requis'});
    }

  
      asyncLib.waterfall([
        (done) => {
          const newProject = models.Project.create({
            title:title,
            description:description,
            image:image,
            github_link: github_link,
            project_link: project_link,
            UserId: UserId,
            tagId: tagId,
            tag2Id: tag2Id,
            tag3Id: tag3Id,
            tag4Id: tag4Id,
            tag5Id: tag5Id,
            tag6Id: tag6Id,
          })
          .then ((newProject) => {
            done(newProject);
            return res.status(201).json({
              'title':title,
              'description':description,
              'image':image,
              'github_link': github_link,
              'project_link': project_link,
              'UserId': UserId,
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
    const title = req.body.title;
    const description	 = req.body.description;
    const image	 = req.body.image;
    const github_link	 = req.body.github_link;
    const project_link	 = req.body.project_link;
    const tagId	 = req.body.tag1;
    const tag2Id	 = req.body.tag2;
    const tag3Id	 = req.body.tag3;
    const tag4Id	 = req.body.tag4;
    const tag5Id	 = req.body.tag5;
    const tag6Id	 = req.body.tag6;

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (UserId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide'});
      } 

      
    asyncLib.waterfall([
      (done) => {
        models.Project.findOne({
          where: { id: id, userId: userId }
        })
        .then((projectEdit) => {
          projectEdit.update({
            title: (title ? title : projectEdit.title),
            description: (description ? description : projectEdit.description),
            image: (image ? image : projectEdit.description),
            github_link: (github_link ? github_link : projectEdit.github_link),
            project_link: (project_link ? project_link : projectEdit.project_link),
            TagId: (tagId ? tagId : projectEdit.TagId),
            Tag2Id: (tag2Id ? tag2Id : null),
            Tag3Id: (tag3Id ? tag3Id : null),
            Tag4Id: (tag4Id ? tag4Id : null),
            Tag5Id: (tag5Id ? tag5Id : null),
            Tag6Id: (tag6Id ? tag6Id : null),
          })
          .then((editProject) => {
            done(editProject)
            return res.status(201).json({
              projectEdit
            })
          })
          .catch(function(err) {
          return res.status(500).json({ 'error': 'Erreur dans les données saisis' });
        });
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'Accès non autorisé' });
        });
        
      },
    ]);
  }
}