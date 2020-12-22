import knex from '../db/knex';

class Model {
  private tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  insert(record: object) {
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

export default Model;
