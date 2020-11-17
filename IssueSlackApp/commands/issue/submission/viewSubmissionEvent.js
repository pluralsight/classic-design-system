https = require("https");
const { App } = require("@slack/bolt");
const axios = require("axios");
const dotenv = require("dotenv");
const stringSimilarity = require("string-similarity");
const gestaltSimilarity = require("gestalt-pattern-matcher").default;
dotenv.config();

function compareByRating(a, b) {
  if (a.rating < b.rating) {
    return 1;
  }
  if (a.rating > b.rating) {
    return -1;
  }
  return 0;
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

exports.viewSubmissionEvent = async ({ ack, body, context, view }) => {
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
      view["state"]["values"]["actualBehaviorInput"]["actual_behavior_input"].value;
    stepsToRepro =
      view["state"]["values"]["stepsToReproInput"]["steps_to_repro_input"].value;
    relatedPackages =
      view["state"]["values"]["relatedPackagesInput"]["related_packages_input"].value;
    environment =
      view["state"]["values"]["environmentInput"]["environment_input"].value;

    issueTitle = title + ": " + shortDescription;

    description =
      "## Bug\n\n### Expected Behavior\n\n" +
      expectedBehavior +
      "\n\n### Actual Behavior\n\n" +
      actualBehavior +
      "\n\n### Steps to Repro\n\n" +
      stepsToRepro +
      "\n\n### Related Packages\n\n" +
      relatedPackages +
      "\n\n### Environment\n\n" +
      environment +
      "\n\n";

    description =`${expectedBehavior} \n${actualBehavior} \n${stepsToRepro} \n${relatedPackages} \n${environment}`;

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

    issueTitle = title + ": " + shortDescription;

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

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "Issue Poster",
      "Authorization": "token " + access_token,
    },
  };

  let issueRecords = [];

  await axios
    .get(
      "https://api.github.com/repos/pluralsight/design-system/issues",
      config
    )
    .then((res) => {
      res.data.forEach((issue) => {
        //let rating = stringSimilarity.compareTwoStrings(description, issue.body)
        let rating = stringSimilarity.compareTwoStrings(
          issueTitle,
          issue.title
        );

        //let rating = gestaltSimilarity(description, issue.body)
        //let rating = gestaltSimilarity(issueTitle, issue.title)

        let issueRecord = {
          issue: issue,
          rating: rating,
        };

        issueRecords.push(issueRecord);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  issueRecords.sort(compareByRating);

  if (metadata[0] === "Bug") {
    await ack({
      response_action: "update",
      view: {
        type: "modal",
        callback_id: "checkSimilarity",
        private_metadata: body.view.private_metadata,
        title: {
          type: "plain_text",
          text: "Issue Poster",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "\n*Your issue may have already been submitted. Do any of these look like your issue?*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${issueRecords[0].issue.title}*: <${issueRecords[0].issue.html_url}>`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${issueRecords[1].issue.title}*: <${issueRecords[1].issue.html_url}>`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${issueRecords[2].issue.title}*: <${issueRecords[2].issue.html_url}>`,
            },
          },
          {
            type: "input",
            block_id: "titleInput",
            label: {
              type: "plain_text",
              text: "Title",
            },
            element: {
              type: "plain_text_input",
              action_id: "title_input",
              initial_value: title,
              multiline: false,
            },
          },
          {
            type: "input",
            block_id: "descriptionInput",
            label: {
              type: "plain_text",
              text: "Short Description",
            },
            element: {
              type: "plain_text_input",
              action_id: "description_input",
              multiline: false,
              initial_value: shortDescription,
            },
          },
          {
            type: "input",
            block_id: "expectedBehaviorInput",
            label: {
              type: "plain_text",
              text: "Expected Behavior",
            },
            element: {
              type: "plain_text_input",
              action_id: "expected_behavior_input",
              multiline: true,
              initial_value: expectedBehavior,
            },
          },
          {
            type: "input",
            block_id: "actualBehaviorInput",
            label: {
              type: "plain_text",
              text: "Actual Behavior",
            },
            element: {
              type: "plain_text_input",
              action_id: "actual_behavior_input",
              multiline: true,
              initial_value: actualBehavior,
            },
          },
          {
            type: "input",
            block_id: "stepsToReproInput",
            label: {
              type: "plain_text",
              text: "Steps to repro",
            },
            element: {
              type: "plain_text_input",
              action_id: "steps_to_repro_input",
              initial_value: "1.",
              multiline: true,
              initial_value: stepsToRepro,
            },
          },
          {
            type: "input",
            block_id: "relatedPackagesInput",
            label: {
              type: "plain_text",
              text: "Related Packages",
            },
            element: {
              type: "plain_text_input",
              action_id: "related_packages_input",
              multiline: true,
              initial_value: relatedPackages,
            },
          },
          {
            type: "input",
            block_id: "environmentInput",
            label: {
              type: "plain_text",
              text: "Environment",
            },
            element: {
              type: "plain_text_input",
              action_id: "environment_input",
              multiline: true,
              initial_value: environment,
            },
          },
        ],
        submit: {
          type: "plain_text",
          text: "No. Submit Issue.",
        },
        close: {
          type: "plain_text",
          text: "Yes! Nevermind then.",
        },
      },
    });
  } else {
    await ack({
      response_action: "update",
      view: {
        type: "modal",
        callback_id: "checkSimilarity",
        private_metadata: body.view.private_metadata,
        title: {
          type: "plain_text",
          text: "Issue Poster",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "*Your issue may have already been submitted. Do any of these look like your issue?*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${issueRecords[0].issue.title}*: <${issueRecords[0].issue.html_url}>`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${issueRecords[1].issue.title}*: <${issueRecords[1].issue.html_url}>`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${issueRecords[2].issue.title}*: <${issueRecords[2].issue.html_url}>`,
            },
          },
          {
            type: "input",
            block_id: "titleInput",
            label: {
              type: "plain_text",
              text: "Title",
            },
            element: {
              type: "plain_text_input",
              action_id: "title_input",
              multiline: false,
              initial_value: title,
            },
          },
          {
            type: "input",
            block_id: "descriptionInput",
            label: {
              type: "plain_text",
              text: "Short Description",
            },
            element: {
              type: "plain_text_input",
              action_id: "description_input",
              multiline: false,
              initial_value: shortDescription,
            },
          },
          {
            type: "input",
            block_id: "desiredBehaviorInput",
            label: {
              type: "plain_text",
              text: "Desired Behavior",
            },
            element: {
              type: "plain_text_input",
              action_id: "desired_behavior_input",
              multiline: true,
              initial_value: desiredBehavior,
            },
          },
          {
            type: "input",
            block_id: "todayBehaviorInput",
            label: {
              type: "plain_text",
              text: "Today's Behavior",
            },
            element: {
              type: "plain_text_input",
              action_id: "today_behavior_input",
              multiline: true,
              initial_value: todayBehavior,
            },
          },
          {
            type: "input",
            block_id: "valueAddInput",
            label: {
              type: "plain_text",
              text: "The Value Add",
            },
            element: {
              type: "plain_text_input",
              action_id: "value_add_input",
              multiline: true,
              initial_value: valueAdd,
            },
          },
          {
            type: "input",
            block_id: "tradeoffsInput",
            label: {
              type: "plain_text",
              text: "The Tradeoffs",
            },
            element: {
              type: "plain_text_input",
              action_id: "tradeoffs_input",
              multiline: true,
              initial_value: tradeoffs,
            },
          },
        ],
        submit: {
          type: "plain_text",
          text: "No. Submit Issue.",
        },
        close: {
          type: "plain_text",
          text: "Yes! Nevermind then.",
        },
      },
    });
  }
};
