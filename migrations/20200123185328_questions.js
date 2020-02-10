
exports.up = function (knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('question_id').primary()
        table.string('question_string')
        table.dateTime('date').defaultTo(new Date().toISOString())
        table.boolean('starred')
        table.integer('votes').defaultTo(0)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions')
};
