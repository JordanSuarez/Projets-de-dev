// Imports
require('dotenv').config();
const jwtUtils = require('../utils/jwt.utils');
const models   = require('../models');

module.exports = {

	updateUser: (req, res) => {
		const headerAuth = req.headers['authorization'];
		const isAdmin = jwtUtils.getIsAdminUser(headerAuth);

    	if (isAdmin) {

			const updateUser = {
				id: req.params.id,
				username: req.body.username,
				email: req.body.email,
				bio: req.body.bio,
				userImage: req.body.userImage,
			};

			models.User.update(updateUser, {
				where: { id: req.params.id }
			}).then(() => {
				res.status(200).json(updateUser);
			}).catch((error) => {
				res.status(500).json({ 'error': 'Le profil n\'a pas pu être mis à jour' });
			});
		} else {
			return res.status(401).json({'error': '' });
		}
	},

	getUserById: (req, res) => {
		models.User.findOne({
			attributes: { exclude: ['password', 'isAdmin', 'updatedAt'],},
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
					email: user.email,
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

	deleteUser: (req, res) => {

		const headerAuth = req.headers['authorization'];
		const isAdmin = jwtUtils.getIsAdminUser(headerAuth);
		const userId = req.params.id

		if (isAdmin) {
			
			models.User.findOne({
				where: { id: userId}
			}).then(() => {
				models.Comment.destroy({
					where: {userId: userId}
				}).then(() => {
					models.Project.destroy({
						where: {userId: userId}						
					}).then(() => {
						models.Message.destroy({
							where: {userId: userId}
						}).then(() => {
							models.User.destroy({
								where: { id: userId }
							}).then(() => {
								return res.status(200).json({ message: 'l\'utilisateur a bien été supprimé' });
							}).catch(() => {
								return res.status(400).json({ 'error' : 'la requête n\'a pas pu aboutir' });
							})
						})
					})
				})
			})
			
		} else {
			return res.status(401).json({'error': 'vous n\'avez pas l\'autorisation de supprimer un utilisateur' });
		}
	},
}