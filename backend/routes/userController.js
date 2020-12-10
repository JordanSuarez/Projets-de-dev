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
				return res.status(400).json({ 'error':  'Merci de renseigner l\'email et le mot de passe | email : ' + email + ' password : ' + password});
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
						return res.status(404).json({ 'error': 'La combinaison d\'email et mot de passe est invalide'});
					}
				},

				(userFound, resBycrypt, done) => {
					if(resBycrypt) {
						done(userFound);
					} else {
						return res.status(403).json({ 'error': 'La combinaison d\'email et mot de passe est invalide'});
					}
				}

			], (userFound) => {
				if (userFound) {
					return res.status(200).json({
						'username': userFound.username,
						'userId': userFound.id,
						'token': jwtUtils.generateTokenForUser(userFound)
					});
				} else {
					return res.status(500).json({'error': 'Impossible de vérifier l\'utilisateur'});
				}
			});
		},
		
		getUserProfile: (req, res) => {
			const headerAuth = req.headers['authorization'];
			const userId = jwtUtils.getUserId(headerAuth);

			if (userId < 0){
				return res.status(400).json({ 'error': 'Le token est invalide' });
			}

			models.User.findOne({
				attributes: { all: true },
				where: { id: userId },
				include: [
					{model: models.Project, include: {model: models.Tag, all:true}, where: {userId: userId}, required: false},
				]
			}).then((user) => {
				if (user) {
					const formatProject = [];
					for (element=0; element < user.Projects.length; element++) {
						const newFormat = {
							id: user.Projects[element].id,
							title: user.Projects[element].title,
							description: user.Projects[element].description,
							github_link: user.Projects[element].github_link,
							project_link: user.Projects[element].project_link,
							image: user.Projects[element].image,
							vote: user.Projects[element].vote,
							tags: [
								user.Projects[element].Tag,
								user.Projects[element].Tag2,
								user.Projects[element].Tag3,
								user.Projects[element].Tag4,
								user.Projects[element].Tag5,
								user.Projects[element].Tag6,
							],
						};
						formatProject.push(newFormat);
					}
					const formatUser = {
						id: user.id,
						username: user.username,
						email: user.email,
						userImage: user.userImage,
						bio: user.bio,
						projects: formatProject, 
					}
					res.status(201).json(formatUser);
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
				attributes: { exclude: ['password', 'isAdmin', 'updatedAt', 'email'],},
				where: {id: req.params.id},
				include: [
					{model: models.Project, include: {model: models.Tag, all:true}, where: {userId: req.params.id}, required: false},
				]
			}).then((user) => {
				if (user) {
					const formatProject = [];
					for (element=0; element < user.Projects.length; element++) {
						const newFormat = {
							id: user.Projects[element].id,
							title: user.Projects[element].title,
							description: user.Projects[element].description,
							github_link: user.Projects[element].github_link,
							project_link: user.Projects[element].project_link,
							image: user.Projects[element].image,
							vote: user.Projects[element].vote,
							tags: [
								user.Projects[element].Tag,
								user.Projects[element].Tag2,
								user.Projects[element].Tag3,
								user.Projects[element].Tag4,
								user.Projects[element].Tag5,
								user.Projects[element].Tag6,
							],
						};
						formatProject.push(newFormat);
					}
					const formatUser = {
						id: user.id,
						username: user.username,
						userImage: user.userImage,
						bio: user.bio,
						projects: formatProject, 
					}
					
					return res.status(201).json(formatUser);
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
				return res.status(400).json({ 'error': 'Le token est invalide' });
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

		deleteUser: (req, res) => {

			const headerAuth = req.headers['authorization'];
			const userId = jwtUtils.getUserId(headerAuth);
			const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
			

			if (userId > 0 && isAdmin == true) {
				
				models.User.destroy({
					where: {id: req.params.id }
				}).then(() => {
					return res.status(200).json({ message: 'l\'utilisateur a bien été supprimé' });
				}).catch((err) => {
					return res.status(400).json({'error' : 'la requête n\'a pas pu aboutir' + err});
				})
				
			} else {
				return res.status(401).json({'error': 'vous n\'avez pas l\'autorisation de supprimer un utilisateur' });
			}
			
			
		},

		deleteMe: (req,res) => {

			const headerAuth = req.headers['authorization'];
			const userId = jwtUtils.getUserId(headerAuth);

			if (userId < 0){
				return res.status(400).json({ 'error': 'Le token est invalide' });
			}

			models.User.destroy({
				where: { id: userId }
			}).then(() => {
				return res.status(200).json({ message: 'l\'utilisateur a bien été supprimé' });
			}).catch(() => {
				return res.status(400).json({'error' : 'la requête n\'a pas pu aboutir' + err});
			})

		},


}