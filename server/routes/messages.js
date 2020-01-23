const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/', (req, res) => {
    db.addQuestion(req.body)
        .then(id => res.send(id))
})


router.get('/', (req, res) => {
    db.getAllQuestions()
        .then(questions => res.send(questions))
})

router.delete('/', (req, res) => {
    db.deleteQuestion(req.body.id)
        .then(id => res.send({ id }))
})

module.exports = router