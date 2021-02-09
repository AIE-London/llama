const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event('link_shared', async ({ event, client, ack }) => {
  try {
    console.log(event);
    const linkPath = event.links[0].url.split('notion.so/').pop();
    const newLink = linkPath && `<notion://${linkPath}/>`;
    ack && ack();
    if (newLink) {
      try {
        const result = await client.chat.postMessage({
          channel: event.channel,
          thread_ts: event.message_ts,
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
  }
  catch (error) {
    console.error(error);
  }
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Llama is running!');
})();
