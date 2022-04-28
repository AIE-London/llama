# Llama

Llama is a Slack bot that: 
 - takes any links to https://notion.so and posts an alternative deep-link into the desktop or mobile notion app. 
 - takes any links to https://console.cloud.google.com and posts an alternative account-switcher link
 
Super Simple!

We built this bot on [glitch.com](https://glitch.com) using Slack's Bolt framework for Node.JS and have since deployed it to a Google Cloud Function.

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/Capgemini-AIE/llama)

## Getting Started

### On Glitch
 - Just hit the button above - and follow the Slack installation steps below - adding the `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` .env variables

### Locally
 - Install dependencies with `yarn`
 - Add the `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` env variables to a `.env` file in the root
 - Run the app using `yarn start`

### GCP
This repository includes a Github Actions script to deploy the service to a serverless cloud function in GCP 
 - Simply fork this repo and specify the following 'secrets' in GitHub actions settings
![image](https://user-images.githubusercontent.com/21035486/119815112-1ee35280-bee3-11eb-951f-61fab98dbe27.png)


## Slack Setup
 - Setup a new Slack App at https://app.slack.com/apps-manage
 - Create a 'Bot User' for this new Slack App
 - Subscribe to Events API for your app - for the `link_shared` event - register `www.notion.so` as your app unfurl domain
 - Add your request URL for the bot to the Slack Events page, it should look like `https://<your-hostname-here>/events`
 - Enable the following 'Bot token Scopes' in the OAuth and Permissions tab
 ![image](https://user-images.githubusercontent.com/21035486/119813786-96b07d80-bee1-11eb-9734-4412e6c31f90.png)
 - Click to "install app" to your workspace and note the `Bot user OAuth access token` + `Signing Secret` - add those to your running application via the instructions above.

