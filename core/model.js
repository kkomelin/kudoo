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

  stats() {
    return knex.select('receiver_user_name as user')
      .count('* as kudos')
      .from(this.tableName)
      .groupBy('receiver_user_id')
      .orderBy('kudos', 'desc');
  }
}

module.exports = {
  Model
}
