const { App, ExpressReceiver } = require('@slack/bolt');

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: '/events',
  processBeforeResponse: true,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  receiver: expressReceiver,
  processBeforeResponse: true
});

app.error(console.error);

app.event('link_shared', async ({ event, client, ack }) => {
  try {
    console.log(event);
    const linkPath = event.links[0].url.split('notion.so/').pop();
    const newLink = linkPath && `<notion://${linkPath}/>`;
    if (newLink) {
      try {
        await client.chat.postMessage({
          channel: event.channel,
          thread_ts: event.thread_ts || event.message_ts,
          "blocks": [
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": newLink
              }
            }
          ]
        });
      } catch (e) {
        console.error(e);
      }
    }
    ack && ack();
  }
  catch (error) {
    console.error(error);
  }
});

/**
 * HTTP Cloud Function (llama)
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.llama = expressReceiver.app;
console.log('⚡️ Llama is running!');

