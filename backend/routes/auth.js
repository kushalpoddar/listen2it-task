const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { getUserByEmail, generateAuthToken } = require('../controller/user')

//Logging in users
router.post('/', async(req, res) => {

	let email = req.body.email.toLowerCase()

	const user = await getUserByEmail(email)
	if(!user) return res.status(400).send('Invalid username or password')

	const validPassword = await bcrypt.compare(req.body.password, user.password)
	if(!validPassword) return res.status(400).send('Invalid username or password')
	
	const userToken = generateAuthToken(user)
	
	let send_obj = { name : user.name, token : userToken, email : user.email }
	
	return res.send(send_obj)
})

module.exports = router