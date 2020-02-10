const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/', (req, res) => {
    let question = {
        question_string: req.body.question_string,
        starred: false
    }
    db.addQuestion(question)
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

router.put('/', (req, res) => {
    db.starQuestion(req.body)
        .then(id =>
            res.send({ id })
        )
})


router.put('/upvote', (req, res) => {
    db.upVote(req.body)
        .then(id => {
            res.send({ id })
        })
})

module.exports = router