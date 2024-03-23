require('dotenv').config()

const express = require('express')

// create express app
const app = express()

// middleware 
// to be able to move to next middleware
app.use((req, rest, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// listen to requests on port 4000
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
