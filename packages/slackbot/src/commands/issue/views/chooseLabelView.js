export const chooseLabelView = async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack()

  try {
    // Call views.open with the built-in client
    const result = await client.views.update({
      // Pass the view_id
      view_id: body.view.id,
      // Pass the current hash to avoid race conditions
      hash: body.view.hash,
      // View payload with updated blocks
      view: {
        type: 'modal',
        // View identifier
        callback_id: 'view_1',
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
              text: 'Choose an issue label.'
            }
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                text: {
                  type: 'plain_text',
                  text: 'Bug'
                },
                action_id: 'bug_issue'
              },
              {
                type: 'button',
                text: {
                  type: 'plain_text',
                  text: 'Enhancement request'
                },
                action_id: 'enhancement_issue'
              }
            ]
          }
        ]
      }
    })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
