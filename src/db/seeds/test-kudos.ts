import Knex from 'knex';
import { IKudos } from '../../models/kudos';

const row = (index: number): IKudos => {
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

export async function seed(knex: Knex): Promise<any> {  
  return knex('kudos').del()
    .then(() => {
      const rows = [1, 2, 3, 4, 5].map(
        index => row(index)
      );
      return knex('kudos').insert(rows);
    });
};
