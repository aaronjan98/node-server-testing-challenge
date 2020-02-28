exports.up = function(knex) {
    return knex.schema.createTable('students', students => {
      students.increments();
  
      students
        .string('username', 128)
        .notNullable()
        .unique();
      students.string('password', 128).notNullable();
      students.string('department', 128)
        .notNullable()
        .defaultTo('customer');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students');
};
  