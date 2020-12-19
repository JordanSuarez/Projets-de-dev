const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');

module.exports = {

    getContactList: (req, res) => {

      const headerAuth = req.headers['authorization'];
      const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

      if (isAdmin == true) {
        models.Contact.findAll({
        })
        .then((messages) => {
          const arrayAllComments = Object.values(messages);
          res.set('X-Total-Count', arrayAllComments.length);
          return res.status(200).json(allComments);

        }).catch((error) => {
          return res.status(500).json({ 'Error': 'Erreur lors de la récupréation des données, les messages des contacts n\'ont pas pu être récupérés' })
        })
      } else {
        return res.status(401).json({'error': '' });
      }
    },

  getContactById: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    if (isAdmin == true) {
      models.Comment.findOne({
        where : {id : req.params.id},
      })
      .then((message) => {
        return res.status(200).json(message);

      }).catch((error) => {
        return res.status(500).json({ 'Error': 'Erreur lors de la récupération des données, le message du contact n\'a pas pu être récupérés' })
      })
    } else {
      return res.status(401).json({'error': '' });
    }
  },

  deleteContact: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
		const contactId = req.params.id

    if (isAdmin == true) {
    
        models.Contact.destroy({
          where: {id: contactId}
        }).then(() => {
          return res.status(200).json({ 'message': 'Le message du contact a bien été supprimé' });
        }).catch((err) => {
          return res.status(400).json({'error' : 'La requête n\'a pas pu aboutir' + err});
        })
    } else {
			return res.status(401).json({'error': '' });
		}
  }
}