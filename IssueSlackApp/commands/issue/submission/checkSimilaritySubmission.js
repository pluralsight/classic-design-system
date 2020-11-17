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
    access_token = process.env.ACCESS_TOKEN;
    channel_id = metadata[1];
  }

  const issueLabel = view["title"]["text"];

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

  if (metadata[0] === "Bug") {
    title = view["state"]["values"]["titleInput"]["title_input"].value;
    shortDescription =
      view["state"]["values"]["descriptionInput"]["description_input"].value;
    expectedBehavior =
      view["state"]["values"]["expectedBehaviorInput"]["expected_behavior_input"].value;
    actualBehavior =
      view["state"]["values"]["actualBehaviorInput"]["actual_behavior_input"]
        .value;
    stepsToRepro =
      view["state"]["values"]["stepsToReproInput"]["steps_to_repro_input"]
        .value;
    relatedPackages =
      view["state"]["values"]["relatedPackagesInput"]["related_packages_input"]
        .value;
    environment =
      view["state"]["values"]["environmentInput"]["environment_input"].value;

    issueTitle = title + ": " + shortDescription;

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
    title = view["state"]["values"]["titleInput"]["title_input"].value;
    shortDescription =
      view["state"]["values"]["descriptionInput"]["description_input"].value;
    desiredBehavior =
      view["state"]["values"]["desiredBehaviorInput"]["desired_behavior_input"].value;
    todayBehavior =
      view["state"]["values"]["todayBehaviorInput"]["today_behavior_input"].value;
    valueAdd =
      view["state"]["values"]["valueAddInput"]["value_add_input"].value;
    tradeoffs =
      view["state"]["values"]["tradeoffsInput"]["tradeoffs_input"].value;

    issueTitle = `${title}: ${shortDescription}`;

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
