// Import
const jwt = require('jsonwebtoken');
const SIGN_SECRET = '5azdgPzefUB77719zdzajrvmpBtcfU42FbiozeARW72162';

// Exported functions
 module.exports = {
	generateTokenForUser: (userData) => {
		return jwt.sign({
			userId: userData.id,
			isAdmin: userData.isAdmin,
		},
		SIGN_SECRET,
		{
			expiresIn: '3h'
		})
	}
} 
