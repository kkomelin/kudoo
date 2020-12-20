
exports.seed = function(knex) {
  function row(index) {
    return {
      id: index, 
      sender_user_id: `sender_user_id_${index}`, 
      sender_user_name: `sender_user_name_${index}`, 
      receiver_user_id: `receiver_user_name_${index}`,
      receiver_user_name: `receiver_user_name_${index}`,
      message: `message_${index}`,
      channel_name: `channel_name_${index}`
    }
  }
  
  return knex('kudos').del()
    .then(function () {
      const rows = [1, 2, 3, 4, 5].map(
        index => row(index)
      );
      return knex('kudos').insert(rows);
    });
};
