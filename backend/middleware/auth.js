const jwt = require('jsonwebtoken')
const { decodeToken } = require('../functions/default')
function auth(req, res, next){
	const token = req.header('x-auth-token')
	if(!token) return res.status(401).send('Access Denied. Authentication failed.')

	try{
		const decoded = decodeToken(token)
		req.user_token_details = decoded
		next()
	}catch(ex){
		res.status(400).send('Invalid token')
	}
}

module.exports = auth