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
				return res.status(400).json({'error': 'L\'email saisie est invalide' + err})
			}

			if (!PASSWORD_REGEX.test(password)) {
				return res.status(400).json({'error': 'La longueur du mot de passe doit être comprise entre 4 et 15 caractères et doit contenir au moins un caractère numérique'});
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
						return res.status(500).json({ 'error': 'Le nom d\'utilisateur et/ou l\'email est déjà utilisé' + err});
					});
				},

				(userFound, done) => {
					if (!userFound) {
						bcrypt.hash(password, 5, (err, bcryptedPassword ) => {
							done(null, userFound, bcryptedPassword);
						});
					} else {
						return res.status(409).json({ 'error': 'Le nom d\'utilisateur et/ou l\'email est déjà utilisé' + err});
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
						return res.status(500).json({'error': err});
					});
				}
			], (newUser) => {
				if(newUser) {
					return res.status(201).json({
					'userId': newUser.id
				});
			} else {
				return res.status(500).json({'error': err});
			}
			});
		},

		login: (req, res) => {
		
			const email = req.body.email;
			const password = req.body.password;

			if (email == null ||  password == null) {
				return res.status(400).json({ 'error': /* 'Merci de renseigner l\'email et le mot de passe | email : ' + email + ' password : ' + password */ err});
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
						return res.status(500).json({'error': /*'La combinaison d\'email et mot de passe est invalide'*/ err});
					});
				},

				(userFound, done) => {
					if (userFound) {
						bcrypt.compare(password, userFound.password, (errBycrypt, resBycrypt) => {
							done(null, userFound, resBycrypt);	
						});
					} else {
						return res.status(404).json({ 'error': /*'La combinaison d\'email et mot de passe est invalide'*/ err});
					}
				},

				(userFound, resBycrypt, done) => {
					if(resBycrypt) {
						done(userFound);
					} else {
						return res.status(403).json({ 'error': /*'La combinaison d\'email et mot de passe est invalide'*/ err });
					}
				}

			], (userFound) => {
				if (userFound) {
					return res.status(200).json({
						'userId': userFound.id,
						'token': jwtUtils.generateTokenForUser(userFound)
					});
				} else {
					return res.status(500).json({'error': /*'Impossible de vérifier l\'utilisateur'*/ err});
				}
			});
		},
		
		getUserProfile: (req, res) => {
			const headerAuth = req.headers['authorization'];
			const userId = jwtUtils.getUserId(headerAuth);

			if (userId < 0){
				return res.status(400).json({ 'error': /*'Le token est invalide'*/ err});
			}

			models.User.findAll({
				attributes: ['id', 'email', 'username', 'userImage', 'bio'],
				where: { id: userId },
				include: {
					model: models.Project, 
					where: {userId: userId},
					required: false
				}
			}).then((user) => {
				if (user) {
					res.status(201).json(user);
				} else {
					res.status(404).json({ 'error': /*'L\'utilisateur n\'a pas été trouvé'*/ err });
				}
			}).catch((err) => {
				res.status(500).json({ 'error': /*'impossible de chercher l\'utilisateur'*/ err });
			});
		},

		getUsersList: (req, res) => {
			models.User.findAll({
				attributes: ['id', 'username', 'userImage'],
			}).then((user) => {
				if (user) {
					return res.status(201).json(user);
				} else {
					return res.status(404).json({ 'error': /*'Aucun utilisateur n\'a pu être trouvé'*/ err });
				}
			}).catch((err) => {
				return res.status(500).json({ 'error': /*'Impossible de récupérer les utilisateurs'*/ err });
			});
		},

		getUserById: (req, res) => {
			models.User.findOne({
				attributes: ['id', 'username', 'userImage', 'bio'],
				where: {id: req.params.id},
				include: {
					model: models.Project, 
					where: {userId: req.params.id},
					required: false
				}
			}).then((user) => {
				if (user) {
					return res.status(201).json(user);
				} else {
					return res.status(404).json({ 'error': /*'L\'utilisateur n\'a pas été trouvé'*/ err});
				}
			}).catch((err) => {
				return res.status(500).json({ 'error': /*'Impossible de rechercher un utilisateur'*/ err});
			})
		},

		updateUserProfile: (req, res) => {
			const headerAuth = req.headers['authorization'];
			const userId = jwtUtils.getUserId(headerAuth);

			
			const username = req.body.username;
			const bio = req.body.bio;
			const userImage = req.body.userImage;
			const password = req.body.password;
			

			if (userId < 0){
				return res.status(400).json({ 'error': /*'Le token est invalide'*/ err});
			}

			asyncLib.waterfall([

				(done) => {
					models.User.findOne({
						where: {id: userId}
					}).then((userFoundEdit) => {
						userFoundEdit.update({
							username: (username ? username : userFoundEdit.username),
							bio: (bio ? bio : userFoundEdit.bio),
							userImage: (userImage ? userImage : userFoundEdit.userImage),
							password: (password ? password : userFoundEdit.password),
						}).then((userFoundEdit) => {
							done(userFoundEdit)
								return res.status(201).json(userFoundEdit);
							
						})
					}).catch((err) => {
						return res.status(500).json({'error': 'Impossible de mettre à jour l\'utilisateur' + err});
					})
				}
			]);


		},


}