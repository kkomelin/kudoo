import { App, ExpressReceiver } from '@slack/bolt';
import dotenv from 'dotenv';
import Core from './core/core';
import { ephemeralMessage } from './core/helpers';
import Kudos from './models/kudos';
dotenv.config();

// Create a Bolt Receiver.
const receiver:ExpressReceiver = new ExpressReceiver({ 
  signingSecret: process.env.SLACK_SIGNING_SECRET || ''
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  // signingSecret: process.env.SLACK_SIGNING_SECRET,
  receiver
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

// Other web requests are methods.
receiver.router.get('/stats', (req, res) => {

  const kudos = new Kudos();
  kudos.stats()
    .then((records: any) => {
      res.type('application/json');
      res.send(records);
      res.end();
    })
    .catch((error:any) => {
      console.error(error);
      res.status(404)
      .send('Not Found')
      .end();
    });  
});

(async () => {
  const port = process.env.PORT || 3000;

  await app.start(port);

  console.log(`⚡️ Server is listening on port ${port}.`);
})();
