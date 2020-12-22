export interface IParsedMessage {
  user_id: string;
  user_name: string;
  message: string;
}

export class CommandTextParser {
  /**
   * Parse command.text.
   * 
   * Make sure you configured your slack command to escape usernames this way:
   * <@U1234|user> <#C1234|general>
   * 
   * @param {string} commandText
   *   command.text
   * @param {string} pattern
   *   RegExp pattern.
   * 
   * @returns {IParsedMessage|null}
   *   null if mismatch
   */
  parse(commandText: string, pattern: string): IParsedMessage | null {
    if (commandText == null || commandText.length === 0) {
      return null;
    }

    const regex = new RegExp(pattern);
    const result = regex.exec(commandText);
    if (result == null || result.length < 3) {
      return null;
    }

    return {
      user_id: result[1].trim(),
      user_name: result[2].trim(),
      message: result[3].trim()
    }
  }
}
