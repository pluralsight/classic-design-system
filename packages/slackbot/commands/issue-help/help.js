const { App } = require("@slack/bolt");
const dotenv = require("dotenv");
dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

exports.help = async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  const userID = body["user_id"];

  let attachments = null;
  let msg =
    "Thanks for using the Issue Poster app! \n\n" +
    "You can use Issue Poster to submit issues to the design-system GitHub repository. \n\n" +
    "Don't have a GitHub account? Just use the `/issue` command and follow the prompts. \n\n" +
    "If you would like to submit the issue using your personal GitHub account, you can first sign-in with the `/issue-signin` command. \n\n" +
    "You can also sign-out with the `/issue-signout`\n\n" +
    "Use the `/issue-help` command to see this message. \n\n";

  try {
    await app.client.chat.postEphemeral({
      token: client["token"],
      attachments: null,
      channel: body["channel_id"],
      user: userID,
      text: msg,
    });
  } catch (error) {
    console.error(error);
  }
};
