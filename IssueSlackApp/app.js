const { App, ExpressReceiver } = require('@slack/bolt');
const https = require('https');
const dotenv = require('dotenv');
const { chooseLabelView } = require('./commands/issue/views/chooseLabelView')
const { enhancementView } = require('./commands/issue/views/enhancementView')
const { viewSubmissionEvent } = require('./commands/issue/submission/viewSubmissionEvent')
const { bugView } = require('./commands/issue/views/bugView');
const { openView } = require('./commands/issue/views/openView');

dotenv.config();

// Create a Bolt Receiver
const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });


// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver 
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running on ' + process.env.PORT);
})();



//
//LISTENERS FOR /ISSUE COMMAND
//

app.command('/issue', openView);

//VIEWS

app.action('no_account', chooseLabelView);

app.action('enhancement_issue', enhancementView);

app.action('bug_issue', bugView);

//ON SUBMISSION

app.view('view_1', viewSubmissionEvent)


//
//OAUTH
//

receiver.router.get('/oauth-callback', (request, res) => {
  
  const data = JSON.stringify({
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
    code: request.query.code,
    state: request.query.state
  });
  
  //Put this in a database with Access Token and Email!
  let userID = request.query.state;

  let options = {
    hostname: 'github.com',
    port: 443,
    path: '/login/oauth/access_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Accept': 'application/json'
    }
  }

  let req = https.request(options, res => {

    bodyResponse = '';

    res.on('data', d => {
      bodyResponse += d;
    });

    res.on('end', async () => {

      if (res.statusCode == 200) {
        process.env['TEMP_TOKEN'] = JSON.parse(bodyResponse)['access_token'];
      } else {
        let msg = "Failure to retrieve access token. Status code: " + res.statusCode;
        //Send message to user
        try {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: user,
            text: msg
          });
        }
        catch (error) {
          console.error(error);
        }
      }

      console.log(msg, process.env.TEMP_TOKEN)

    });

    req.on('error', error => {
      console.error(error)
      msg = "Failure to retrieve access token."
    });

  });

  req.write(data)
  req.end();

  options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/user',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Accept': 'application/json',
      'Authorization': 'token ' + process.env.TEMP_TOKEN
    }
  }

  req = https.request(options, res => {

    bodyResponse = '';

    res.on('data', d => {
      bodyResponse += d;
    });


    res.on('end', async () => {

      if (res.statusCode == 200) {
        process.env['TEMP_EMAIL'] = JSON.parse(bodyResponse)['email'];
      } else {
        let msg = "Failure to retrieve user. Bad token. Status code: " + res.statusCode;
        //Send message to user
        try {
          await app.client.chat.postMessage({
            token: context.botToken,
            channel: user,
            text: msg
          });
        }
        catch (error) {
          console.error(error);
        }
      }

    });

    req.on('error', error => {
      console.error(error)
      msg = "Failure to retrieve user."
    });  

  });

  req.write(data)
  req.end();

  //
  //   PUT USERID, EMAIL, AND PERSONAL ACCESS TOKEN IN DATABASE
  //

  //RETURN MESSAGE TELLING USER THAT SLACK/GITHUB ACCOUNTS HAVE BEEN LINKED.
  

  res.redirect(process.env.APP_HOMEPAGE_URI);

})
