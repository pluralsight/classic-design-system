https = require("https");
const { App } = require("@slack/bolt");
const dotenv = require("dotenv");
dotenv.config();
const { Client } = require("pg");

const db = new Client();
db.connect();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

exports.signin = async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  const userID = body["user_id"];

  const query1 = {
    // give the query a unique name
    name: "fetch-user",
    text: "SELECT * FROM authenticatedusers WHERE slack_id = $1",
    values: [userID],
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



  let attachments = null;

  if (user) {
    attachments = [
      {
        text: "You are already signed in.",
        fallback: "You are unable to sign-in.",
        callback_id: "signin",
        color: "#7CFC00",
        attachment_type: "default",
      },
    ];
  } else {
    attachments = [
      {
        text: "Sign-in to your GitHub account?",
        fallback: "You are unable to sign-in.",
        callback_id: "signin",
        color: "#7CFC00",
        attachment_type: "default",
        actions: [
          {
            name: "signin",
            text: "Yes",
            type: "button",
            url:
              `https://github.com/login/oauth/authorize?client_id=${process.env.OAUTH_CLIENT_ID}&state=${userID}&scope=repo&redirect_uri=${process.env.REDIRECT_URI}`,
          },
        ],
      },
    ];
  }

  try {
    await app.client.chat.postEphemeral({
      token: client["token"],
      attachments: attachments,
      channel: body["channel_id"],
      user: userID,
    });
  } catch (error) {
    console.error(error);
  }
};
