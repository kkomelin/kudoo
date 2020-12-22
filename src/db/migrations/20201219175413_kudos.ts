import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.hasTable('kudos').then((exists: boolean) => {
    if (!exists) {
      return knex.schema.createTable('kudos', function(table: Knex.TableBuilder) {
        table.increments('id').primary();
        table.string('sender_user_id');
        table.string('sender_user_name');
        table.string('receiver_user_id').index();
        table.string('receiver_user_name');
        table.text('message');
        table.string('channel_name');
      });
    }
  });
};

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('kudos');
};
