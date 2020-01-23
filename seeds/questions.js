
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { question_id: 1, question_string: 'How long is a piece of string?', date: '2020-03-02T03:08:20.857Z' },
        { question_id: 2, question_string: 'What is your favourite kind of pie?', date: '2020-02-02T03:08:20.857Z' },
        { question_id: 3, question_string: 'Why???', date: '2020-01-02T03:08:20.857Z' },
        ,
      ]);
    });
};
