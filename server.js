const { App } = require('@slack/bolt');
const { Core } = require('./core/core');
const { ephemeralMessage } = require('./core/helpers');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command('/kudoo', async ({ command, ack, respond }) => {

  const core = new Core();

  try {
    await ack();
    const result = await core.processCommand(command);
    await respond(ephemeralMessage(result));
  }
  catch(e) {
    // @todo: better handle errors. Log them to the database or some external service.
    console.log(e);

    await respond(ephemeralMessage(
      `An error has occurred. Please contact ${process.env.APP_NAME} app developer.`
    ));
  }
});

(async () => {
  const port = process.env.PORT || 3000;

  await app.start(port);

  console.log(`⚡️ Server is listening on port ${port}.`);
})();
