const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


module.exports = {

  index: (req, res) => {
  

    models.Project.findAll({})
    .then((project) => {
        return res.status(200).json(project)
    })
    .catch((error) => {
    return res.status(500).json(error)
    })
  },

  filter: (req, res) => {

    models.Project.findAll({
      where : {tag_id : req.params.tag},

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
      where : {id : req.params.id}
    })
    .then((project) => {
        return res.status(200).json(project)
    })
    .catch((error) => {
    return res.status(500).json('ERROR')
    })
  },

    limitOffset : (req, res) => {
    
    req.params.limit = parseInt(req.params.limit);
    req.params.offset = parseInt(req.params.offset);

    models.Project.findAll({
      limit : req.params.limit,
      offset : req.params.offset,
    })
    .then((project) => {
        return res.status(200).json(project)
    })
    .catch((error) => {
    return res.status(500).json(error)
    })
  },

  new: (req, res) => {


    const title = req.body.title;
    const description	 = req.body.description;
    const image	 = req.body.image;
    const github_link	 = req.body.github_link;
    const project_link	 = req.body.project_link;

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (UserId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide'});
    } 

    if (description == null || title == null || image == null) {
      return res.status(500).json({'error':'Titre, description et images requis'});
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
              'status': 'Projet ajouté avec succès'
            })
          })
          .catch((err) => {
            return res.status(500).json({'error': 'Erreur lors de l\'ajout du nouveau projet' + err});
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

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (UserId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide'});
      } 

      
    asyncLib.waterfall([
      (done) => {
        models.Project.findOne({
          attributes: ['id', 'title', 'description', 'image', 'github_link', 'project_link', 'userId' ],
          where: { id: id, userId: userId }
        })
        .then((projectEdit) => {
          projectEdit.update({
            title: (title ? title : projectEdit.title)
          })
          .then((editProject) => {
            done(editProject)
            return res.status(201).json({
              'title':title,
              'description':description,
              'image':image,
              'github_link': github_link,
              'project_link': project_link,
              'UserId': UserId,
              'status': 'Projet modifié avec succès'
            })
          })
          .catch(function(err) {
          return res.status(500).json({ 'error': 'Accès non autorisé' });
        });
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'Accès non autorisé' });
        });
        
      },
    ]);
  }
}