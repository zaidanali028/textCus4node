//using axios for making http request(GET)
const axios = require("axios");

//requiring the dotenv module for handling environment variables
require("dotenv").config();

const  smsApiKey = process.env.TEXT_CUS_API_KEY;

//name of your company
let sender = "TXTCUS";

//the message to send
let sms="Hello from textcus,making sms simple for developers"

//encodeURI()  function for UTF-8 encoding
let smsEncode = encodeURI(sms);

//recipient phone number in international format
recipient="+233543895338"

//encoding sender string to UTF-8
senderEncode= encodeURI(sender);

let url=`https://sms.textcus.com/api/send?apikey=${smsApiKey}&destination=${recipient}&source=${senderEncode}&dlr=0&type=0&message=${smsEncode}`
// Using axios to send a get request
try{
    axios.get(url)
    //response from promise
.then(response=>{
  console.log(response.data.message)
  //Message sent successfully.
 })
 .catch((err) => {
     console.log(err)
 })

}
catch(e){
    console.log(e)

}
