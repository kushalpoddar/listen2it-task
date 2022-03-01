const express = require('express')
const cors = require('cors')
const app = express()
const config = require('config')
app.use(express.json())

app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use('/static', express.static('static'))

//Route handlers
const user_route = require('./routes/user')
const auth_route = require('./routes/auth')
const fasting_route = require('./routes/fasting')
 
app.set('trust proxy', 1);

//Routes
app.use('/api/user', user_route)
app.use('/api/auth', auth_route)
app.use('/api/fasting', fasting_route)

// // 1st call for unredirected requests 
// app.use(express.static(path.join(__dirname + '/build')))
// // Support history api 
// app.use(history());
// // 2nd call for redirected requests
// app.use(express.static(path.join(__dirname + '/build')))

app.get('/', (req, res) => {
	res.send("HIII")
})

//Setting up WebServer
const port = 7521
const server = app.listen(port, async() => {
	console.log(`Running on Port ${port}`)	
})