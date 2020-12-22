import Model from '../core/model';

export interface IKudos {
  id?: number;
  sender_user_id: string;
  sender_user_name: string;
  receiver_user_id: string;
  receiver_user_name: string;
  message: string;
  channel_name: string;
}

export default class Kudos extends Model implements IKudos {
  public id: number = 0;
  public sender_user_id: string = '';
  public sender_user_name: string = '';
  public receiver_user_id: string = '';
  public receiver_user_name: string = '';
  public message: string = '';
  public channel_name: string = '';

  constructor() {
    super('kudos');
  }
}
