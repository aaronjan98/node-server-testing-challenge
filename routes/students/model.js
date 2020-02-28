const db = require('../../database/connection');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('students').select('id', 'username', 'password', 'department');
}

function findBy(filter) {
  return db('students').where(filter);
}

async function add(student) {
  return db('students').insert(student);
}

function findById(id) {
  return db('students')
    .where({ id })
    .first();
}
