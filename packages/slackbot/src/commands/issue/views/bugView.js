export const bugView = async ({ ack, body, client, context }) => {
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
        private_metadata: 'Bug ' + body.view.private_metadata,
        title: {
          type: 'plain_text',
          text: 'Issue Poster'
        },
        blocks: [
          {
            type: 'input',
            block_id: 'titleInput',
            label: {
              type: 'plain_text',
              text: 'Title'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'title_input',
              placeholder: {
                type: 'plain_text',
                text:
                  'fill in title: format of "package name: short description"'
              },
              multiline: false
            }
          },
          // {
          //   type: 'input',
          //   block_id: 'descriptionInput',
          //   label: {
          //     type: 'plain_text',
          //     text: 'Short Description'
          //   },
          //   element: {
          //     type: 'plain_text_input',
          //     action_id: 'description_input',
          //     multiline: false
          //   }
          // },
          {
            type: 'input',
            block_id: 'expectedBehaviorInput',
            label: {
              type: 'plain_text',
              text: 'Expected Behavior'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'expected_behavior_input',
              multiline: true
            }
          },
          {
            type: 'input',
            block_id: 'actualBehaviorInput',
            label: {
              type: 'plain_text',
              text: 'Actual Behavior'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'actual_behavior_input',
              multiline: true
            }
          },
          {
            type: 'input',
            block_id: 'stepsToReproInput',
            label: {
              type: 'plain_text',
              text: 'Steps to repro'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'steps_to_repro_input',
              initial_value: '1.',
              multiline: true
            }
          },
          {
            type: 'input',
            block_id: 'relatedPackagesInput',
            label: {
              type: 'plain_text',
              text: 'Related Packages'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'related_packages_input',
              initial_value: '- button@7.0.1 \n- core@2.3.4',

              multiline: true
            }
          },
          {
            type: 'input',
            block_id: 'environmentInput',
            label: {
              type: 'plain_text',
              text: 'Environment'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'environment_input',
              initial_value:
                '- OS - MacOS 10.12 \n- Browser version - Chrome v60',
              multiline: true
            }
          }
        ],
        submit: {
          type: 'plain_text',
          text: 'Continue'
        }
      }
    })
    context.logger.debug({ msg: 'Bug view success', result })
  } catch (err) {
    context.logger.error({ msg: 'Bug view error', err })
  }
}
