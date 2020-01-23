const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const database = require('knex')(config)

function addQuestion(question, db = database) {
    return db('questions')
        .insert(question)
}

function getAllQuestions(db = database) {
    return db('questions')
        .select()
}

module.exports = {
    addQuestion,
    getAllQuestions
}