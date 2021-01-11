import { App, ExpressReceiver } from '@slack/bolt'
import * as axios from 'axios'
import * as dotenv from 'dotenv'
import * as https from 'https'
import pg from 'pg'

import { chooseLabelView } from './commands/issue/views/chooseLabelView.js'
import { enhancementView } from './commands/issue/views/enhancementView.js'
import { viewSubmissionEvent } from './commands/issue/submission/viewSubmissionEvent.js'
import { bugView } from './commands/issue/views/bugView.js'
import { createLogger } from './logger.js'
import { openView } from './commands/issue/views/openView.js'
import { signout } from './commands/issue-signout/signout.js'
import { signin } from './commands/issue-signin/signin.js'
import { help } from './commands/issue-help/help.js'
import { checkSimilaritySubmissionEvent } from './commands/issue/submission/checkSimilaritySubmission.js'

const logger = createLogger()
const db = new pg.Client()
db.connect()

dotenv.config()

// Create a Bolt Receiver
const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET
})

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver
})

;(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000)

  logger.info('⚡️ Bolt app is running on ' + process.env.PORT)
})()

app.use(logger.boltGlobalMiddleware)

//
// LISTENER FOR /issue-signout COMMAND
//
app.command('/issue-signout', signout)

app.command('/issue-signin', signin)

app.command('/issue-help', help)

//
// LISTENERS FOR /issue COMMAND
//

app.command('/issue', openView)

// VIEWS FOR /issue

app.action('no_account', chooseLabelView)

app.action('enhancement_issue', enhancementView)

app.action('bug_issue', bugView)

// ON SUBMISSION

app.view('view_1', viewSubmissionEvent)

app.view('checkSimilarity', checkSimilaritySubmissionEvent)

// HEALTH-CHECK
// eslint-disable-next-line  @typescript-eslint/no-misused-promises
receiver.router.get('/health-check', async (request, res) => {
  res.sendStatus(200)
})

//
// OAUTH
//
// eslint-disable-next-line  @typescript-eslint/no-misused-promises
receiver.router.get('/oauth-callback', async (request, res) => {
  const data = JSON.stringify({
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
    code: request.query.code,
    state: request.query.state
  })

  const userID = request.query.state
  let accessToken = ''
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      Accept: 'application/json'
    }
  }

  await axios
    .post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code: request.query.code,
        state: request.query.state
      },
      config
    )
    .then(res => {
      if (res.status === 200) {
        accessToken = res.data.access_token
      } else {
        logger.error({
          msg: 'Github get access token non-2000',
          status: res.status,
          res
        })
      }
    })
    .catch(err => {
      logger.error({
        msg: 'Github get access token error',
        err
      })
    })

  const insertQuery = {
    text:
      'INSERT INTO authenticatedusers(slack_id, access_token) VALUES($1, $2) ON CONFLICT (slack_id) DO UPDATE SET access_token = $2',
    values: [userID, accessToken]
  }

  let user = null

  db.query(insertQuery, (err, res) => {
    if (err) {
      logger.error({ msg: 'Insert user error', userID, err })
    } else {
      user = res.rows[0]
    }
  })

  // RETURN MESSAGE TELLING USER THAT SLACK/GITHUB ACCOUNTS HAVE BEEN LINKED.

  // Message the user
  try {
    await app.client.chat.postMessage({
      token: process.env.SLACK_BOT_TOKEN,
      channel: userID,
      text:
        'You can now post issues to design-system under your GitHub account using the `/issue` command. \n\n Use the `issue-signout` command to sign-out.'
    })
  } catch (err) {
    logger.error({ msg: 'Slack post insert user error', userID, err })
  }

  res.redirect(process.env.APP_HOMEPAGE_URI)
})
