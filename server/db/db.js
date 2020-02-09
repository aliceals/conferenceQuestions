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


function starQuestion(starData, db = database) {
    let id = starData.id
    let bool = starData.bool

    return db('questions')
        .where('question_id', id)
        .update({ 'starred': bool })
}


function moveUp(id, db = database) {
    let newId = id.id - 1
    return db('questions')
        .where('question_id', id)
        .update({ 'question_id': newId })
}

module.exports = {
    addQuestion,
    getAllQuestions,
    deleteQuestion,
    starQuestion,
    moveUp
}