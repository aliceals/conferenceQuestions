
exports.up = function (knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('question_id').primary()
        table.string('question_string')
        table.dateTime('created_at').defaultTo(new Date().toISOString())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions')
};
