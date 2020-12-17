const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');

module.exports = {

  updateComment: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    if (isAdmin == true) {

      const id = req.params.id;
      const content = req.body.content;
      
      models.Comment.findOne({
        where: { id: id}
      })
      .then((commentEdit) => {
        commentEdit.update({
          content: (content ? content : commentEdit.content),
        })
        .then(() => {
          return res.status(201).json({commentEdit})
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + err });
        });
      })
      .catch(function(err) {
        return res.status(500).json({ 'error': /*'Accès non autorisé'*/ err });
      });
    } else {
			return res.status(401).json({'error': '' });
		}
  },

  deleteComment: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
		const commentId = req.params.id

    if (isAdmin == true) {
    
        models.Comment.destroy({
          where: {id: commentId}
        }).then(() => {
          return res.status(200).json({ 'message': 'Le commentaire a bien été supprimé' });
        }).catch((err) => {
          return res.status(400).json({'error' : 'La requête n\'a pas pu aboutir' + err});
        })
    } else {
			return res.status(401).json({'error': '' });
		}
  }
}