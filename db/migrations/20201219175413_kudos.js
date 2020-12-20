
exports.up = function(knex) {
  return knex.schema.hasTable('kudos').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('kudos', function(table) {
        table.increments('id').primary();
        table.string('sender_user_id');
        table.string('sender_user_name');
        table.string('receiver_user_id');
        table.string('receiver_user_name');
        table.text('message');
        table.string('channel_name');
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('kudos');
};
