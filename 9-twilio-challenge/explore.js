 const Twilio = require("twilio");
   const accountSid = 'ACe05b1b41bd9ae32013db4d1098198072';
const authToken = '551568a4277dc5e583e15546e86e9937';
const client = require('twilio')(accountSid, authToken);
//  const client = new Twilio("ACe05b1b41bd9ae32013db4d1098198072", "551568a4277dc5e583e15546e86e9937");
 
 client.messages
  .list()
  .then(messages => 
    console.log(`The most recent massage is ${messages[0].body}`)
  ).catch(err => console.error(err));

  console.log('Gathering your massage log') ;