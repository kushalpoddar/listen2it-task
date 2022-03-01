const conn = require('../conn')
const jwt = require("jsonwebtoken")

const getUserByEmail = (email) => {
    const query = "SELECT * FROM users WHERE email = ?"
    return new Promise((resolve, reject) => {
        conn.query(query, [email], async(err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }

            return resolve(data.length ? data[0] : null)
        })
    })
}

const getUser = (id) => {
    const query = "SELECT * FROM users WHERE id = ?"
    return new Promise((resolve, reject) => {
        conn.query(query, [id], async(err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }

            return resolve(data.length ? data[0] : null)
        })
    })
}

const createUser = ({data}) => {
    const query = "INSERT INTO users(name, email, password) VALUES(?, ?, ?)"
    return new Promise((resolve, reject) => {
        conn.query(query, [data.name, data.email, data.password], async(err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }

            const user = await getUser(data.insertId)
            return resolve(user)
        })
    })
}

const generateAuthToken = (user) => {
    const token = jwt.sign({ 
		name : user.name, 
		email : user.email, 
		id : user.id, 
	}, 'KP')
	return token
}

module.exports = {
    getUser,
	getUserByEmail,
    createUser,
    generateAuthToken
}
