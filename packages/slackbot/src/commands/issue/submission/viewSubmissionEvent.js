import { App } from '@slack/bolt'
import * as axios from 'axios'
import * as dotenv from 'dotenv'
import stringSimilarity from 'string-similarity'
// const gestaltSimilarity = require('gestalt-pattern-matcher').default

dotenv.config()

function compareByRating(a, b) {
  if (a.rating < b.rating) {
    return 1
  }
  if (a.rating > b.rating) {
    return -1
  }
  return 0
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
})

export const viewSubmissionEvent = async ({ ack, body, context, view }) => {
  const metadata = body.view.private_metadata.split(' ')

  let accessToken = ''
  let channelId = ''

  if (metadata.length === 3) {
    accessToken = metadata[1]
    channelId = metadata[2]
  } else {
    accessToken = process.env.PLATFORMUI_ACCESS_TOKEN
    channelId = metadata[1]
  }

  const issueLabel = view.title.text

  let issueTitle = ''
  let description = ''
  const labels = []

  let title = ''
  const shortDescription = ''

  let expectedBehavior = ''
  let actualBehavior = ''
  let stepsToRepro = ''
  let relatedPackages = ''
  let environment = ''

  let desiredBehavior = ''
  let todayBehavior = ''
  let valueAdd = ''
  let tradeoffs = ''

  if (metadata[0] === 'Bug') {
    title = view.state.values.titleInput.title_input.value
    // shortDescription =
    //   view["state"]["values"]["descriptionInput"]["description_input"].value;
    expectedBehavior =
      view.state.values.expectedBehaviorInput.expected_behavior_input.value
    actualBehavior =
      view.state.values.actualBehaviorInput.actual_behavior_input.value
    stepsToRepro =
      view.state.values.stepsToReproInput.steps_to_repro_input.value
    relatedPackages =
      view.state.values.relatedPackagesInput.related_packages_input.value
    environment = view.state.values.environmentInput.environment_input.value

    issueTitle = title

    description =
      '## Bug\n\n### Expected Behavior\n\n' +
      expectedBehavior +
      '\n\n### Actual Behavior\n\n' +
      actualBehavior +
      '\n\n### Steps to Repro\n\n' +
      stepsToRepro +
      '\n\n### Related Packages\n\n' +
      relatedPackages +
      '\n\n### Environment\n\n' +
      environment +
      '\n\n'

    description = `${expectedBehavior} \n${actualBehavior} \n${stepsToRepro} \n${relatedPackages} \n${environment}`

    labels.push('bug')
    labels.push('needs-triage')
  } else {
    title = view.state.values.titleInput.title_input.value
    // shortDescription =
    //   view["state"]["values"]["descriptionInput"]["description_input"].value;
    desiredBehavior =
      view.state.values.desiredBehaviorInput.desired_behavior_input.value
    todayBehavior =
      view.state.values.todayBehaviorInput.today_behavior_input.value
    valueAdd = view.state.values.valueAddInput.value_add_input.value
    tradeoffs = view.state.values.tradeoffsInput.tradeoffs_input.value

    issueTitle = title

    description = `## Enhancement Request

      ### Desired Behavior

      ${desiredBehavior}

      ### Today's Behavior

      ${todayBehavior}

      ### The Value Add

      ${valueAdd}

      ### The Tradeoffs

      ${tradeoffs}

      `

    labels.push('enhancement')
    labels.push('needs-triage')
  }

  const user = body.user.id
  const username = body.user.name

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'Issue Poster',
      Authorization: 'token ' + accessToken
    }
  }

  const issueRecords = []

  await axios
    .get(
      'https://api.github.com/repos/pluralsight/design-system/issues',
      config
    )
    .then(res => {
      res.data.forEach(issue => {
        // let rating = stringSimilarity.compareTwoStrings(description, issue.body)
        const rating = stringSimilarity.compareTwoStrings(
          issueTitle,
          issue.title
        )

        // let rating = gestaltSimilarity(description, issue.body)
        // let rating = gestaltSimilarity(issueTitle, issue.title)

        const issueRecord = {
          issue: issue,
          rating: rating
        }

        issueRecords.push(issueRecord)
      })
    })
    .catch(error => {
      console.log(error)
    })

  issueRecords.sort(compareByRating)

  if (metadata[0] === 'Bug') {
    await ack({
      response_action: 'update',
      view: {
        type: 'modal',
        callback_id: 'checkSimilarity',
        private_metadata: body.view.private_metadata,
        title: {
          type: 'plain_text',
          text: 'Issue Poster'
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Title*\n'
            }
          },
          {
            type: 'section',
            block_id: 'titleInput',
            text: {
              type: 'mrkdwn',
              text: title
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Expected Behavior*\n'
            }
          },
          {
            type: 'section',
            block_id: 'expectedBehaviorInput',
            text: {
              type: 'mrkdwn',
              text: expectedBehavior
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Actual Behavior*\n'
            }
          },
          {
            type: 'section',
            block_id: 'actualBehaviorInput',
            text: {
              type: 'mrkdwn',
              text: actualBehavior
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Steps to repro*\n'
            }
          },
          {
            type: 'section',
            block_id: 'stepsToReproInput',
            text: {
              type: 'mrkdwn',
              text: stepsToRepro
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Related Packages*\n'
            }
          },
          {
            type: 'section',
            block_id: 'relatedPackagesInput',
            text: {
              type: 'plain_text',
              text: relatedPackages
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Environment*\n'
            }
          },
          {
            type: 'section',
            block_id: 'environmentInput',
            text: {
              type: 'plain_text',
              text: environment
            }
          },
          {
            type: 'divider'
          },
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text:
                'Your issue may have already been submitted. Do any of these look like your issue?'
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${issueRecords[0].issue.title}*: <${issueRecords[0].issue.html_url}>`
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${issueRecords[1].issue.title}*: <${issueRecords[1].issue.html_url}>`
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${issueRecords[2].issue.title}*: <${issueRecords[2].issue.html_url}>`
            }
          }
        ],
        submit: {
          type: 'plain_text',
          text: 'Not a duplicate. Submit.'
        },
        close: {
          type: 'plain_text',
          text: 'Issue exists. Cancel.'
        }
      }
    })
  } else {
    await ack({
      response_action: 'update',
      view: {
        type: 'modal',
        callback_id: 'checkSimilarity',
        private_metadata: body.view.private_metadata,
        title: {
          type: 'plain_text',
          text: 'Issue Poster'
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Title*\n'
            }
          },
          {
            type: 'section',
            block_id: 'titleInput',
            text: {
              type: 'mrkdwn',
              text: title
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Desired Behavior*\n'
            }
          },
          {
            type: 'section',
            block_id: 'desiredBehaviorInput',
            text: {
              type: 'mrkdwn',
              text: desiredBehavior
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: "*Today's Behavior*\n"
            }
          },
          {
            type: 'section',
            block_id: 'todayBehaviorInput',
            text: {
              type: 'mrkdwn',
              text: todayBehavior
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*The Value Add*\n'
            }
          },
          {
            type: 'section',
            block_id: 'valueAddInput',
            text: {
              type: 'mrkdwn',
              text: valueAdd
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Related Packages*\n'
            }
          },
          {
            type: 'section',
            block_id: 'tradeoffsInput',
            text: {
              type: 'plain_text',
              text: tradeoffs
            }
          },
          {
            type: 'divider'
          },
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text:
                'Your issue may have already been submitted. Do any of these look like your issue?'
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${issueRecords[0].issue.title}*: <${issueRecords[0].issue.html_url}>`
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${issueRecords[1].issue.title}*: <${issueRecords[1].issue.html_url}>`
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${issueRecords[2].issue.title}*: <${issueRecords[2].issue.html_url}>`
            }
          }
        ],
        submit: {
          type: 'plain_text',
          text: 'Not a duplicate. Submit.'
        },
        close: {
          type: 'plain_text',
          text: 'Issue exists. Cancel.'
        }
      }
    })
  }
}
