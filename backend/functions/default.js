//Global configurations
const config = require('config')
const file_config = config.get('files')
const jwt = require('jsonwebtoken')


const fileAddPath = function(files){
	const new_files = files.map(file_name => `${file_config.path}${file_name}`)
	return new_files
}

//Adding file path (both for array and string)
const fileAddPathCustom = function(files, type){
	if(files == null){
		return null
	}
	const var_type = typeof files
	if(var_type == "string"){
		//If string type then convert to an array
		files = [files]
	}

	let new_files = files.filter(file_name => file_name && file_name.length).map(file_name => {
		let new_file
		if(type == 'avatar'){
			new_file = `${file_config.path}${file_config.avatar}${file_name}`
		}
	
		return new_file
	})

	if(var_type == "string"){
		return new_files[0]
	}
	return new_files
}

const decodeToken = (token) => {
	return jwt.verify(token, 'KP')
}
module.exports = { fileAddPath, fileAddPathCustom, decodeToken }