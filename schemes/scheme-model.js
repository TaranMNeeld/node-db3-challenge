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
  }
  
  function add(scheme) {
    return db('schemes')
      .insert(scheme, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }

  function update(changes, id) {
      return
  }
  
  function remove(id) {
      return
  }