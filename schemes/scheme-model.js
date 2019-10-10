const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('schemes as s')
    .join('steps as st', 'st.scheme_id', 's.id')
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id: id })
    .orderBy('step_number')
}

function add(scheme) {
  return db('schemes')
    .insert(scheme, 'id')
    .then(([id]) => {
      findById(id);F
    });
}

function update(changes, id) {
  return db('schemes')
    .update(changes)
    .where({id})
}

function remove(id) {
  return db('schemes')
    .del()
    .where({id})
}