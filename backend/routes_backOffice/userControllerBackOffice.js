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