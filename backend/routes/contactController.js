const models   = require('../models');

module.exports = {

  new: (req, res) => {
  console.log(req.body)
    const headerAuth = req.headers['authorization'];

    models.Contact.create({
      name: req.body.name,
      email: req.body.email,
      object: req.body.object,
      website: req.body.website,
      message: req.body.message,
    })
    .then (() => {
      return res.status(201).json({
        'status': 'Votre message à été envoyé'
      })
    })
    .catch((err) => {
      return res.status(500).json({'error': 'Votre message n\'a pas pu être envoyé'});
    });
      
  },
}