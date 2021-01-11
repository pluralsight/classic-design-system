import * as dotenv from 'dotenv'
import { App } from '@slack/bolt'
import pg from 'pg'

dotenv.config()

const db = new pg.Client()
db.connect()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
})

export const signout = async ({ ack, body, client, context }) => {
  // Acknowledge the command request
  await ack()

  const userID = body.user_id

  const deleteUser = {
    // give the query a unique name
    name: 'delete-user',
    text: 'DELETE FROM authenticatedusers WHERE slack_id = $1 RETURNING *',
    values: [userID]
  }

  let user = null
  let msg = 'An error has occurred. Try signing out again.'
  await db
    .query(deleteUser)
    .then(res => {
      user = res.rows[0]
      context.logger.debug({ msg: 'Delete user success', user })

      if (user) {
        msg = 'You have signed out of your Github account.'
      } else {
        msg = 'You have not yet signed in. Try the `/issue-signin` command.'
      }
    })
    .catch(err => {
      context.logger.error({ msg: 'Delete user error', userID, err })
    })

  try {
    await app.client.chat.postEphemeral({
      token: client.token,
      channel: body.channel_id,
      user: userID,
      text: msg
    })
  } catch (error) {
    context.logger.error({ msg: 'Delete user slack post error', userID, err })
  }
}
