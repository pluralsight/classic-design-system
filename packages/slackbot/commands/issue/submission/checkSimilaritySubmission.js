https = require("https");
const { App } = require("@slack/bolt");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

exports.checkSimilaritySubmissionEvent = async ({
  ack,
  body,
  context,
  view,
}) => {
  await ack();

  const metadata = body.view.private_metadata.split(" ");

  let access_token = "";
  let channel_id = "";

  if (metadata.length === 3) {
    access_token = metadata[1];
    channel_id = metadata[2];
  } else {
    access_token = process.env.PLATFORMUI_ACCESS_TOKEN;
    channel_id = metadata[1];
  }

  let issueTitle = "";
  let description = "";
  let labels = [];

  let title = "";
  let shortDescription = "";

  let expectedBehavior = "";
  let actualBehavior = "";
  let stepsToRepro = "";
  let relatedPackages = "";
  let environment = "";

  let desiredBehavior = "";
  let todayBehavior = "";
  let valueAdd = "";
  let tradeoffs = "";
  console.log("*****", view.blocks[1]["text"]["text"])
  if (metadata[0] === "Bug") {
    title = view["blocks"][1]["text"]["text"];
    expectedBehavior = view["blocks"][3]["text"]["text"];
    actualBehavior = view["blocks"][5]["text"]["text"]
    stepsToRepro = view["blocks"][7]["text"]["text"]
    relatedPackages = view["blocks"][9]["text"]["text"]
    environment = view["blocks"][11]["text"]["text"]

    issueTitle = title;

    description =
      `## Bug

### Expected Behavior

${expectedBehavior}

### Actual Behavior

${actualBehavior}

### Steps to Repro

${stepsToRepro}

### Related Packages

${relatedPackages}

### Environment

${environment}

`;

    labels.push("bug");
    labels.push("needs-triage");
  } else {
    title = view["blocks"][1]["text"]["text"];
    desiredBehavior = view["blocks"][3]["text"]["text"];
    todayBehavior = view["blocks"][5]["text"]["text"];
    valueAdd = view["blocks"][7]["text"]["text"];
    tradeoffs = view["blocks"][9]["text"]["text"];

    issueTitle = title;

    description =
      `## Enhancement Request

### Desired Behavior

${desiredBehavior}

### Today's Behavior

${todayBehavior}

### The Value Add

${valueAdd}

### The Tradeoffs
${tradeoffs}

`;

    labels.push("enhancement");
    labels.push("needs-triage");
  }

  const user = body["user"]["id"];
  const username = body["user"]["name"];

  let data = JSON.stringify({
    title: issueTitle,
    body: description,
    labels: labels,
  });

  config = {
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "Issue Poster",
      "Authorization": "token " + access_token,
    },
  };

  let msg = "";

  await axios
    .post(
      "https://api.github.com/repos/piercebring/resumeWebsite/issues",
      //"https://api.github.com/repos/pluralsight/design-system/issues",
      {
        title: issueTitle,
        body: description,
        labels: labels,
      },
      config
    )
    .then((res) => {
      if (res.status == 201) {
        msg =
          `An issue has been posted by ${username}: ${res.data.html_url}`;
      } else {
        msg = `Failure to post issue. Status code: ${res.status}`;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  try {
    await app.client.chat.postMessage({
      token: context.botToken,
      channel: channel_id,
      text: msg,
    });
  } catch (error) {
    console.error(error);
  }
};
