// Imports
const bcrypt   = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models   = require('../models');
const asyncLib = require('async');

//constantes
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,15}$/;

//Routes
module.exports = {

    register: (req, res) => {
			
			const username = req.body.username;
      const email = req.body.email;
	  	const password = req.body.password;
			
			if(email == null || username == null || password == null) {
				return res.status(400).json({'error': 'Tous les champs requis ne sont pas renseignés'});
			}

			if (username.length >= 13 || username.length <=4) {
				return res.status(400).json({'error': 'Le nom d\'utilisateur est invalide, la longueur doit être comprise entre 5 et 12 caractères'});
			}

			if (!EMAIL_REGEX.test(email)) {
				return res.status(400).json({'error': 'L\'email saisi est invalide'})
			}

			if (!PASSWORD_REGEX.test(password)) {
				return res.status(400).json({'error': 'La longueur du mot de passe doit être comprise entre 4 et 15 caractères et doit contenir au moins un caractère numérique'})
			}			
			
			asyncLib.waterfall([
				
				(done) => {
					models.User.findOne({
						attributes: ['email'],
						where: { email: email}
					})
					.then((userFound) => {
						done(null, userFound);
					})
					.catch((err) => {
						return res.status(500).json({ 'error': 'Erreur lors de la verification de l\'utilisateur'});
					});
				},

				(userFound, done) => {
					if (!userFound) {
						bcrypt.hash(password, 5, (err, bcryptedPassword ) => {
							done(null, userFound, bcryptedPassword);
						});
					} else {
						return res.status(409).json({ 'error': 'le nom d\'utilisateur et/ou l\'email est déjà utilisé'});
					}
				},

				(userFound, bcryptedPassword, done) => {
					const newUser = models.User.create({
						email:email,
						username:username,
						password: bcryptedPassword,
						isAdmin: 0
					})
					.then ((newUser) => {
						done(newUser);
					})
					.catch((err) => {
						return res.status(500).json({'error': 'Impossible d\'enregistrer l\'utilisateur'});
					});
				}
			], (newUser) => {
				if(newUser) {
					return res.status(201).json({
					'userId': newUser.id
				});
			} else {
				return res.status(500).json({'error': 'Impossible d\'enregistrer l\'utilisateur'});
			}
		});
	},

		login: (req, res) => {
		
			const email = req.body.email;
			const password = req.body.password;

			if (email == null ||  password == null) {
				return res.status(400).json({ 'error': 'missing parameters' });
			}

			asyncLib.waterfall([

				(done) => {
					models.User.findOne({
						where: { email: email }
					})
					.then((userFound) => {
						done(null, userFound);
					})
					.catch((err) => {
						return res.status(500).json({'error': 'Impossible de vérifier l\'utilisateur'});
					});
				},

				(userFound, done) => {
					if (userFound) {
						bcrypt.compare(password, userFound.password, (errBycrypt, resBycrypt) => {
							done(null, userFound, resBycrypt);	
						});
					} else {
						return res.status(404).json({ 'error': 'L\'utilisateur n\'existe pas dans la base de donnée'});
					}
				},

				(userFound, resBycrypt, done) => {
					if(resBycrypt) {
						done(userFound);
					} else {
						return res.status(403).json({ 'error': 'Mot de passe invalide' });
					}
				}

			], (userFound) => {
				if (userFound) {
					return res.status(200).json({
						'userId': userFound.id,
						'token': jwtUtils.generateTokenForUser(userFound)
					});
				} else {
					return res.status(500).json({'error': 'Impossible de vérifier l\'utilisateur'});
				}
			});
		},	
}

