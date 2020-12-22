import { SlashCommand } from '@slack/bolt';
import Kudos, { IKudos } from '../models/kudos';
import { CommandTextParser, IParsedMessage } from './parser';

class Core {
  private messageRegex: string = '\\<@([^\\|]+)\\|([^\\>]+)\\>\\s*([^$]*)';
  private incorrectFormatMessage: string = 'Message format should be: @username your message';

  async processCommand(command: SlashCommand): Promise<string> {
    const commandText = command.text;

    const parser = new CommandTextParser();
    const parsedMessage: IParsedMessage | null = parser.parse(commandText, this.messageRegex);
    if(parsedMessage === null) {
      return Promise.resolve(this.incorrectFormatMessage);
    }

    const record: IKudos = {
      sender_user_id: command.user_id,
      sender_user_name: command.user_name,
      receiver_user_id: parsedMessage.user_id,
      receiver_user_name: parsedMessage.user_name,
      message: parsedMessage.message,
      channel_name: command.channel_name,
    }

    const kudos = new Kudos();
    return kudos.insert(record).then(() => {
      return Promise.resolve(`@${parsedMessage.user_name} has just received your kudos!`);
    }).catch((error: any) => {
      console.error(error);
      return Promise.resolve(`Cannot add your kudos. Please try again or contact ${process.env.APP_NAME} app developer.`);
    });
  }
}

export default Core;
