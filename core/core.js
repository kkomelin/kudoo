const { Kudos } = require("../models/kudos");

class Core {
  constructor() {
    this.messageRegex = '\\<@([^\\|]+)\\|([^\\>]+)\>\\s*([^$]*)';
    this.incorrectFormatMessage = 'Message format should be: @username your message';
  }

  /**
   * Make sure you configured your slack command to escape usernames this way:
   * <@U1234|user> <#C1234|general>
   * 
   * @param {string} commandText 
   */
  parseCommandText(commandText) {
    if(commandText == null || commandText.length === 0) {
      return false;
    }

    const regex = new RegExp(this.messageRegex);
    const result = regex.exec(commandText);
    if(result == null || result.length < 3) {
      return false;
    }

    return {
      user_id: result[1].trim(),
      user_name: result[2].trim(),
      message: result[3].trim()
    }
  }

  async processCommand(command) {
    const commandText = command.text;

    const parsedMessage = this.parseCommandText(commandText);
    if(parsedMessage === false) {
      return Promise.resolve(this.incorrectFormatMessage);
    }

    const record = {
      sender_user_id: command.user_id,
      sender_user_name: command.user_name,
      receiver_user_id: parsedMessage.user_id,
      receiver_user_name: parsedMessage.user_name,
      message: parsedMessage.message,
      channel_name: command.channel_name,
    }

    const kudos = new Kudos();
    return kudos.insert(record).then(recordIndex => {
      return Promise.resolve(`@${parsedMessage.user_name} has just received your kudos!`);
    }).catch(error => {
      console.error(error);
      return Promise.resolve(`Cannot add your kudos. Please try again or contact ${process.env.APP_NAME} app developer.`);
    });
  }
}

module.exports = {
  Core
}
