const dotenv = require("dotenv");
dotenv.config();
const { App } = require("@slack/bolt");
const { Client } = require("pg");

const db = new Client();
db.connect();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

exports.signout = async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  const userID = body["user_id"];

  const deleteUser = {
    // give the query a unique name
    name: "delete-user",
    text: "DELETE FROM authenticatedusers WHERE slack_id = $1 RETURNING *",
    values: [userID],
  };

  let user = null;
  let msg = "An error has occurred. Try signing out again.";
  await db
    .query(deleteUser)
    .then((res) => {
      user = res.rows[0];
      console.log(user);

      if (user) {
        msg = "You have signed out of your Github account.";
      } else {
        msg = "You have not yet signed in. Try the `/issue-signin` command.";
      }
    })
    .catch((err) => {
      console.log(err);
    });

  try {
    await app.client.chat.postEphemeral({
      token: client["token"],
      channel: body["channel_id"],
      user: userID,
      text: msg,
    });
  } catch (error) {
    console.error(error);
  }
};
