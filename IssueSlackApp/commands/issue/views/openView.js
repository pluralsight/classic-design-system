const dotenv = require("dotenv");
dotenv.config();
const { Client } = require("pg");

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

const db = new Client();
db.connect();

exports.openView = async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  const userID = body["user_id"];

  const query1 = {
    // give the query a unique name
    name: "fetch-user",
    text: "SELECT * FROM authenticatedusers WHERE slack_id = $1",
    values: [userID]
  };

  let user = null;

  await db
    .query(query1)
    .then((res) => {
      user = res.rows[0];
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });

  if (user) {
    try {
      // Call views.open with the built-in client
      const result = await client.views.open({
        trigger_id: body.trigger_id,

        view: {
          type: "modal",
          // View identifier
          callback_id: "view_1",
          private_metadata: user.access_token + " " + body["channel_id"],
          title: {
            type: "plain_text",
            text: "Issue Poster"
          },
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Choose an issue label."
              }
            },
            {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Bug"
                  },
                  action_id: "bug_issue"
                },
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Enhancement request"
                  },
                  action_id: "enhancement_issue"
                }
              ]
            }
          ]
        }
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      // Call views.open with the built-in client
      const result = await client.views.open({
        // Pass a valid trigger_id within 3 seconds of receiving it
        trigger_id: body.trigger_id,
        // View payload

        view: {
          type: "modal",
          // View identifier
          callback_id: "view_1",
          private_metadata: body["channel_id"],
          title: {
            type: "plain_text",
            text: "Issue Poster"
          },
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "Do you have a GitHub account?"
              }
            },
            {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Yes"
                  },
                  url:
                    "https://github.com/login/oauth/authorize?client_id=" +
                    process.env.OAUTH_CLIENT_ID +
                    "&state=" +
                    userID +
                    "&scope=repo" +
                    "&redirect_uri=" +
                    process.env.REDIRECT_URI
                },
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "No"
                  },
                  action_id: "no_account"
                }
              ]
            }
          ]
        }
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
};