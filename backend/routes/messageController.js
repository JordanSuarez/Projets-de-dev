const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


module.exports = {

  new: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0){
      return res.status(400).json({ 'error': 'Le token est invalide' });
    }

    const content = req.body.content;
    const channelId	 = req.body.channelId;


    if (content == null || userId == null || channelId == null) {
      return res.status(500).json({'error': 'Requête invalide'});
    }
  
    asyncLib.waterfall([
      (done) => {
        const newMessage = models.Message.create({
          content: content,
          UserId: userId,
          ChannelId: channelId,
        })
        .then ((newMessage) => {
          return res.status(201).json({
            'status': 'Message ajouté avec succès'
          }).catch((err) => {
            return res.status(500).json({'error': err});
          })
        })
        .catch((err) => {
          return res.status(500).json({'error':  err});
        });
      }
    ])
  },
}