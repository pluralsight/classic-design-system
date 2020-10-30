const dotenv = require('dotenv');
dotenv.config();

exports.openView = async ({ ack, body, client }) => {
  
    // Acknowledge the command request
    await ack();

    const userID = body['user_id']
    
    //change to *if there exists a personal access token for this user_id*

    if(process.env.TEMP_TOKEN != "none"){
        try {
            // Call views.open with the built-in client
            const result = await client.views.open({
        
                trigger_id: body.trigger_id,

              view: {
                type: 'modal',
                // View identifier
                callback_id: 'view_1',
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
        
        
            });
            console.log(result);
          }
          catch (error) {
            console.error(error);
          }
    } else {
        try {
            // Call views.open with the built-in client
            const result = await client.views.open({
              // Pass a valid trigger_id within 3 seconds of receiving it
              trigger_id: body.trigger_id,
              // View payload
      
              view: {
                type: 'modal',
                // View identifier
                callback_id: 'view_1',
                title: {
                  type: 'plain_text',
                  text: 'Issue Poster'
                },
                blocks: [
                  {
                    type: 'section',
                    text: {
                      type: 'mrkdwn',
                      text: 'Do you have GitHub account?'
                    }
                  },
                  {
                    type: 'actions',
                    elements: [
                      {
                        type: 'button',
                        text: {
                          type: 'plain_text',
                          text: 'What\'s a GitHub?'
                        },
                        action_id: 'no_account',
                      },
                      {
                        type: 'button',
                        text: {
                          type: 'plain_text',
                          text: 'Yes'
                        },
                        url: 'https://github.com/login/oauth/authorize?client_id=' + process.env.OAUTH_CLIENT_ID + '&state=' + userID
                        +'&scope=repo' + '&redirect_uri=' + process.env.REDIRECT_URI 
                      }
        
                    ]
                  }
                ]
              }
            });
            console.log(result);
          }
          catch (error) {
            console.error(error);
          }

    } 
  }