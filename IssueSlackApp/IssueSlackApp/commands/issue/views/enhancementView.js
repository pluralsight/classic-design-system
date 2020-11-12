exports.enhancementView =  async ({ ack, body, client }) => {
    // Acknowledge the command request
    await ack();

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
            text: 'Enhancement Request'
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
                multiline: false
              }
            },
            {
              type: 'input',
              block_id: 'descriptionInput',
              label: {
                type: 'plain_text',
                text: 'Short Description'
              },
              element: {
                type: 'plain_text_input',
                action_id: 'description_input',
                multiline: false
              }
            },
            {
              type: 'input',
              block_id: 'desiredBehaviorInput',
              label: {
                type: 'plain_text',
                text: 'Desired Behavior'
              },
              element: {
                type: 'plain_text_input',
                placeholder: {
                  type: 'plain_text',
                  text: 'Support you wish you had.'
                },
                action_id: 'desired_behavior_input',
                multiline: true
              }
            },
            {
              type: 'input',
              block_id: 'todayBehaviorInput',
              label: {
                type: 'plain_text',
                text: 'Today\'s Behavior'
              },
              element: {
                type: 'plain_text_input',
                placeholder: {
                  type: 'plain_text',
                  text: 'Problems/friction you encounter.'
                },
                action_id: 'today_behavior_input',
                multiline: true
              }
            },
            {
              type: 'input',
              block_id: 'valueAddInput',
              label: {
                type: 'plain_text',
                text: 'The Value Add'
              },
              element: {
                type: 'plain_text_input',
                action_id: 'value_add_input',
                placeholder: {
                  type: 'plain_text',
                  text: 'Why this should be added/changed in the Design System. Where we could use it.'
                },
                multiline: true
              }
            },
            {
              type: 'input',
              block_id: 'tradeoffsInput',
              label: {
                type: 'plain_text',
                text: 'The Tradeoffs'
              },
              element: {
                type: 'plain_text_input',
                action_id: 'tradeoffs_input',
                placeholder: {
                  type: 'plain_text',
                  text: 'What we give up or deoptimize to get it. The costs.'
                },
                multiline: true
              }
            }
          ],
          submit: {
            type: 'plain_text',
            text: 'Submit'
          }
        }
      });
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  }