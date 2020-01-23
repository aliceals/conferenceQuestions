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

function deleteQuestion(id, db = database) {
    return db('questions')
        .where('question_id', id)
        .del()
}

module.exports = {
    addQuestion,
    getAllQuestions,
    deleteQuestion
}