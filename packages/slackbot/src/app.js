const { App, ExpressReceiver } = require('@slack/bolt')
const https = require('https')
const dotenv = require('dotenv')
const { chooseLabelView } = require('./commands/issue/views/chooseLabelView')
const { enhancementView } = require('./commands/issue/views/enhancementView')
const {
  viewSubmissionEvent
} = require('./commands/issue/submission/viewSubmissionEvent')
const { bugView } = require('./commands/issue/views/bugView')
const { openView } = require('./commands/issue/views/openView')
const { signout } = require('./commands/issue-signout/signout')
const { signin } = require('./commands/issue-signin/signin')
const { help } = require('./commands/issue-help/help')
const {
  checkSimilaritySubmissionEvent
} = require('./commands/issue/submission/checkSimilaritySubmission')
const axios = require('axios')

const { Client } = require('pg')

const db = new Client()
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

  console.log('⚡️ Bolt app is running on ' + process.env.PORT)
})()

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

receiver.router.get('/health-check', async (request, res) => {
  res.sendStatus(200)
})

//
// OAUTH
//

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
        console.log('Error retrieving access token: ' + res.status)
      }
    })
    .catch(error => {
      console.log(error)
    })

  const insertQuery = {
    text:
      'INSERT INTO authenticatedusers(slack_id, access_token) VALUES($1, $2) ON CONFLICT (slack_id) DO UPDATE SET access_token = $2',
    values: [userID, accessToken]
  }

  let user = null

  db.query(insertQuery, (err, res) => {
    if (err) {
      console.log(err)
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
  } catch (error) {
    console.error(error)
  }

  res.redirect(process.env.APP_HOMEPAGE_URI)
})
