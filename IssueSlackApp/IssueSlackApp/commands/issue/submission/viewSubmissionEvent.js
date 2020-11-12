https = require('https');
const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config()

const app = new App({

  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
  
});

exports.viewSubmissionEvent = async ({ack, body, context, view }) => {

  await ack();

  const metadata = body.view.private_metadata.split(" ");

  let access_token = "";
  let channel_id = "";

  if(metadata.length === 2) {
    access_token = metadata[0];
    channel_id = metadata[1];
  } else {
    access_token = process.env.ACCESS_TOKEN;
    channel_id = metadata[0];
  }



  const issueLabel = view['title']['text'];

  let issueTitle = "";
  let description = "";
  let labels = [];

  if (issueLabel === "Bug") {

    const title = view['state']['values']['titleInput']['title_input'];
    const shortDescription = view['state']['values']['descriptionInput']['description_input'];
    const expectedBehavior = view['state']['values']['expectedBehaviorInput']['expected_behavior_input'];
    const actualBehavior = view['state']['values']['actualBehaviorInput']['actual_behavior_input'];
    const stepsToRepro = view['state']['values']['stepsToReproInput']['steps_to_repro_input'];
    const relatedPackages = view['state']['values']['relatedPackagesInput']['related_packages_input'];
    const environment = view['state']['values']['environmentInput']['environment_input'];

    issueTitle = title.value + ": " + shortDescription.value;

    description = '## Bug\n\n### Expected Behavior\n\n' + expectedBehavior.value + '\n\n### Actual Behavior\n\n'
      + actualBehavior.value + '\n\n### Steps to Repro\n\n' + stepsToRepro.value + '\n\n### Related Packages\n\n' + relatedPackages.value
      + '\n\n### Environment\n\n' + environment.value + '\n\n';

    labels.push('bug')
    labels.push('needs-triage')

  }
  else {

    const title = view['state']['values']['titleInput']['title_input'];
    const shortDescription = view['state']['values']['descriptionInput']['description_input'];
    const desiredBehavior = view['state']['values']['desiredBehaviorInput']['desired_behavior_input'];
    const todayBehavior = view['state']['values']['todayBehaviorInput']['today_behavior_input'];
    const valueAdd = view['state']['values']['valueAddInput']['value_add_input'];
    const tradeoffs = view['state']['values']['tradeoffsInput']['tradeoffs_input'];


    issueTitle = title.value + ": " + shortDescription.value;

    description = '## Enhancement Request\n\n### Desired Behavior\n\n' + desiredBehavior.value + '\n\n### Today\'s Behavior\n\n'
      + todayBehavior.value + '\n\n### The Value Add\n\n' + valueAdd.value + '\n\n### The Tradeoffs\n' + tradeoffs.value
      + '\n\n';

    labels.push('enhancement')
    labels.push('needs-triage')

  }

  const user = body['user']['id'];
  const username = body['user']['name'];

  //Message to send user
  let msg = '';

  const data = JSON.stringify({
    title: issueTitle,
    body: description,
    labels: labels
  });

  options = {};
  
  if(metadata.length === 2) {

    options = {
      hostname: 'api.github.com',
      port: 443,
      path: '/repos/piercebring/resumeWebsite/issues',
      //path: '/repos/pluralsight/design-system/issues',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Issue-Poster',
        'Authorization': 'token ' + access_token
      }
    }   
  } else {
    options = {
      hostname: 'api.github.com',
      port: 443,
      path: '/repos/piercebring/resumeWebsite/issues',
      //path: '/repos/pluralsight/design-system/issues',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'platform-ui@pluralsight.com',
        'Authorization': 'token ' + access_token
      }
    }
    
  }
  

  const req = https.request(options, res => {

    msg = '';
    bodyResponse = '';

    res.on('data', d => {
      bodyResponse += d;
    });

    res.on('end', async () => {

      if (res.statusCode == 201) {
        msg = "An issue has been posted by " + username + ": " + JSON.parse(bodyResponse)['html_url'];
      } else {
        msg = "Failure to post issue. Status code: " + res.statusCode;
      }

      //Send message to user
      
      try {
        await app.client.chat.postMessage({
          token: context.botToken,
          channel: channel_id,
          text: msg
        });
      }
      catch (error) {
        console.error(error);
      }

    });

    req.on('error', error => {
      console.error(error)
      msg = "Failure to post issue."
    });

  });

  req.write(data)
  req.end();


}