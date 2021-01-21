const models = require('../models');

module.exports = {
  getChannelList: (req, res) => {
    models.Channel.findAll({
      attributes: ['id', 'name'],
    }).then((channelList) => {
      const channelArray = Object.values(channelList);
      return res.status(201).json(channelArray);
    }).catch((err) => {
      res.status(404).json({
        'error': 'Impossible de récupérer les channels' + err
      });
    })
  },

  getChannel: (req, res) => {
    models.Channel.findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: models.Message,
          attributes: {
            exclude: ['UserId', 'ChannelId', 'updatedAt']
          },
          include: {
            model: models.User,
            attributes: {
              exclude: ['password', 'isAdmin', 'updatedAt', 'email', 'bio', 'createdAt'],
            }
          }
        }]
      })
      .then((channel) => {
        const formatChannel = {
          id: channel.id,
          name: channel.name,
          messages: channel.Messages
        }
        return res.status(200).json(formatChannel)
      })
      .catch((error) => {
        return res.status(500).json(error)
      })
  },
}