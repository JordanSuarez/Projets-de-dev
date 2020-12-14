const models   = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');

module.exports = {

  new: ({message, userToken, channelId}) => {

    
    const userId = jwtUtils.getUserId(userToken);

    if (userId < 0){
      return null;
    }

    if (message == null || userId == null || channelId == null) {
      return null;
    }
    asyncLib.waterfall([
      (done) => {
        const newMessage = models.Message.create({
          content: message,
          UserId: userId,
          ChannelId: channelId,
        })
        .then ((newMessage) => {
          const formatMessage = {
            id: newMessage.id,
            message: newMessage.content,
            userId: newMessage.UserId,
            channelId: newMessage.ChannelId,
          }
          return formatMessage;
        })
        .catch((err) => {
          return 'tata';
        });
      }
    ])
  },
}

// .then ((newComment) => {
//   return res.status(201).json({
//     'status': 'Commentaire ajouté avec succès'
//   }).catch((err) => {
//     return res.status(500).json({'error': err});
//   })
// })
// .catch((err) => {
//   return res.status(500).json({'error':  err});
// });