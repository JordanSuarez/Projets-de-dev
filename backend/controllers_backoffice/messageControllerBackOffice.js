const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');

module.exports = {
  getMessagesList: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
    const sort = req.query._sort
    const order = req.query._order

    if (isAdmin) {
      models.Message.findAll({
        order: [
          [sort, order],
        ],
        attributes: ['id', 'content', 'userId', 'createdAt'],
        include: {
          all: true,
          attributes: {
            exclude: ['password', 'isAdmin', 'updatedAt', 'email', 'bio', 'createdAt'],
            where: {
              id: models.Message.userId
            },
          },
        }
      }).then((messages) => {
        const arrayAllMessages = Object.values(messages);
        res.set('X-Total-Count', arrayAllMessages.length);
        return res.status(201).json(messages);
      }).catch((err) => {
        res.status(404).json({
          'error': 'Impossible de récupérer les messages' + err
        });
      })
    }
  },


  deleteMessage: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    if (isAdmin) {
      models.Message.destroy({
        where: {
          id: req.params.id
        }
      }).then(() => {
        res.status(200).json({
          'Message': 'Le message a bien été supprimé'
        });
      }).catch(() => {
        res.status(500).json({
          'Error': 'Erreur lors de la suppression du message'
        });
      })
    }

  },
}