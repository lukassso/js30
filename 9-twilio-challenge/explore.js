const Twilio = require("twilio");
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

 
 client.messages
  .list()
  .then(messages => 
    console.log(`The most recent massage is ${messages[0].body}`)
  ).catch(err => console.error(err));

  console.log('Gathering your massage log') ;