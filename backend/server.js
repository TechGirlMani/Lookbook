require('dotenv').config()

const express = require('express')
const lookbookRoutes = require('./routes/lookbooks')

// create express app
const app = express()

// middleware 
app.use(express.json())
// to be able to move to next middleware
app.use((req, rest, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/lookbooks', lookbookRoutes)


// listen to requests on port 4000
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
