const express = require('express')

const router = express.Router()

// GET all looks
router.get('/', (req, res) => {
    res.json({mssg: 'GET all lookbooks'})
})

//  GET a single look
router.get('/:id', (res, req) => {
    res.json({mssg: 'GET a single look'})
})

// POST a new look
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new look'})
});

// DELETE a new look
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new look'})
});

// UPDATE a new look
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new look'})
});


module.exports = router