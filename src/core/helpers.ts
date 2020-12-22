import { RespondArguments } from '@slack/bolt';

const ephemeralMessage = (text: string): RespondArguments => {
  return {
    text,
    response_type: 'ephemeral',
    replace_original: true
  }
}

export {
  ephemeralMessage
};
