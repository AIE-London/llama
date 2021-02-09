# Slack Bolt App

This is an example App built with [Slack's Bolt Framework](https://slack.dev/bolt/tutorial/getting-started) in node.js.

Our App is a simple reactji channeler which reposts messages from any channel the Bot user is part of to a configured channel, simply by reacting with the ⚡ emoji to any of these messages.

### Features

* Show a welcome message to the user when they open the App's DM with [`app_home_opened`](https://api.slack.com/events/app_home_opened) event
* Let the user configure a default channel for reposting messages to
* Show a confirmation message once the default channel is set and provide an option to invite our Bot User to existing channels
* Once our App is invited to a channel it will introduce itself with [`member_joined_channel`](https://api.slack.com/events/member_joined_channel) event
* When a user adds a reaction with the ⚡ emoji to a message in a channel where the Bot User is part of, it will post a link of this message to the configured channel.

### Requirements

* A Bot User must be added to your App
* Your App must be subscribed to [Events API](https://api.slack.com/events-api)
* [Interactive components](https://api.slack.com/reference/messaging/interactive-components) must be enabled
* Your app needs to be subscribed to the events mentioned in the *Events* section

### Scopes

* [`bot`](https://api.slack.com/scopes/bot)
* [`channels:write`](https://api.slack.com/scopes/channels:write)

### Events

#### Workspace events
* [`app_home_opened`](https://api.slack.com/events/app_home_opened)

#### Bot events
* [`member_joined_channel`](https://api.slack.com/events/member_joined_channel)
* [`reaction_added`](https://api.slack.com/events/reaction_added)