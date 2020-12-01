// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

//Routes
module.exports = {
    register: (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
	  	const password = req.body.password;
			
			if(email == null || name == null || password == null) {
				return res.status(400).json({'error': 'missing parameters'});
			}
			// TODO Faire les vérifications de longueur, caractères etc.
			models.User.findOne({
				attributes: ['email'],
				where: { email: email}
			})
			.then((userFound) => {
				if (!userFound) {
					bcrypt.hash(password, 5, (err, bcryptedPassword ) => {
						const newUser = models.User.create({
							email:email,
							name:name,
							password: bcryptedPassword,
							isAdmin: 0
						})
						.then((newUser) => {
              return res.status(201).json({
                'userId': newUser.id
              })
            })
            .catch((err) => {
              return res.status(500).json({'error': 'cannot add user'})
            })
					})
				} else {
					return res.status(409).json({ 'error': 'user already exist'});
				}
			})
			.catch((err) => {
				return res.status(500).json({ 'error': 'enable to verify user'});
			});
    },
    login: (req, res) => {
        //TODO
    },
}
