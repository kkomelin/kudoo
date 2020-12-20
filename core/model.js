const knex = require('../db/knex');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  insert(record) {
    return knex(this.tableName)
      .insert(record);
  }

  all() {
    return knex.select().from(this.tableName);
  }
}

module.exports = {
  Model
}
