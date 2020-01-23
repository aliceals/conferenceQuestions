const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/', (req, res) => {
    db.addQuestion(req.body)
        .then(id => res.send(id))
})

module.exports = router