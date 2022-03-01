const express = require('express')
const router = express.Router()
const hash = require('../hash')
const { createUser, getUserByEmail } = require('../controller/user')

//Auth middleware to protect routes
const auth = require('../middleware/auth')

//Create a new user - Signup form
router.post('/', async(req, res) => {
		
	// Checking duplicacy for email
	let user = await getUserByEmail(req.body.email)
	
	if(user) return res.status(400).send('User already registered with this email')

	let user_obj = {
		name : req.body.name,
		email : req.body.email,
		password : await hash(req.body.password),
	}

	const new_user = await createUser({ data : user_obj})
	return res.send(new_user)
})

module.exports = router