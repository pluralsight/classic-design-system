To run

```
cp .env.example .env # and edit
npm install
npm start
```

Postgres

Expose localhost

ngrok

ngrok http 3000




Slack

Create app in PS workspace
https://api.slack.com/apps/A01F7MTT202?created=1


Interactivity

Bots
For SLACK_BOT_TOKEN
https://api.slack.com/apps/A01F7MTT202/oauth?from_app_home=1
Review Scopes to Add
Add oauth scopes:
- chat:write
- commands



For OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET
Github Oauth App
Client ID
Gen Secret

For APP_HOMEPAGE_URI
In Slack
Copy App ID
Append to URL
APP_HOMEPAGE_URI=https://slack.com/app_redirect?app=
