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
	},

	parseAuthorization: (authorization) => {
		return (authorization != null) ? authorization.replace('Bearer ', '') : null;
	},

	getUserId: (authorization) => {
		const token = module.exports.parseAuthorization(authorization);
		if(token != null) {
			try {
				const jwtToken = jwt.verify(token, SIGN_SECRET);
				if(jwtToken != null) {
          UserId = jwtToken.userId;
          return UserId
				}
			} catch(err) {}
		}
		return UserId = -1;
	}
} 
