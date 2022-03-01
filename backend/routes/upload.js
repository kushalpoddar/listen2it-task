const express = require('express')
const router = express.Router()

//Config
const config = require('config')
const file_config = config.get('files')
const base_path = file_config.get('basepath')

//Upload files
const destination = `uploads/${config.get('files').get('avatar')}`
const storage = multer.diskStorage({
	destination,
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`)
	}
})
const upload = multer({ 
	storage: storage,
	limits : {
		fieldSize: (30 * 1024 * 1024) //30MB
	}
})

const uploadMiddeware = (req, res, next) => {
    upload.single('file')
    next()
}

//Uploading a file
router.post('/', [auth, uploadMiddeware], async(req, res) => {
	if(!req.file || req.file.filename){
        return res.status(400).send("Invalid file")
	}

    const filename = req.file.filename
	// const file_url = fileAddPathCustom(user.profile_picture, 'avatar')
	return res.send({
		// url : file_url,
		filename
	})
})

module.exports = router