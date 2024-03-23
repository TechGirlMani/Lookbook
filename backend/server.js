const express = require('express')

// create express app
const app = express()

// listen to requests on port 4000
app.listen(4000, () => {
    console.log('listening on port 4000')
})