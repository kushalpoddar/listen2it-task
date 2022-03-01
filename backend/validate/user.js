const Joi = require('joi')

const validateUser = function(user){
	const schema = Joi.object({
		name : Joi.string().required().trim(),
		gender : Joi.string().required().trim(),
		email : Joi.string().email().required().trim(),
		mobile : Joi.string().alphanum().allow('').trim(),
		country_code : Joi.string().alphanum().allow('').trim(),
		referral_code : Joi.string().allow('').trim(),
		plan : Joi.string().required().trim(),
		payment_type : Joi.string().required().trim(),
		otp : Joi.string().required().trim(),
		password : Joi.string().required().trim(),
		order_id : Joi.string().optional().allow('').trim(),
		payment_id : Joi.string().optional().allow('').trim()
	})

	return schema.validate(user)
}

const validateUserEdit = function(user){
	const schema = Joi.object({
		address1 : Joi.string().trim(),
		address2 : Joi.string().trim(),
		city : Joi.string().trim(),
		state : Joi.string().trim(),
		pincode : Joi.string().trim(),
		ac_no : Joi.string().trim(),
		ifsc : Joi.string().trim(),
		bank_name : Joi.string().trim(),
		adhar_no : Joi.string().trim(),
		pan_no : Joi.string().trim(),
		adhar_file : Joi.string().trim(),
		pan_file : Joi.string().trim(),
		paytm_number : Joi.string().trim().optional().allow(''),
	}).unknown()

	return schema.validate(user)
}

module.exports = { validateUser, validateUserEdit }