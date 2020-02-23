const http = require('http');
const mysql = require("mysql");
const express = require('express');
const urlencoded = require('body-parser').urlencoded;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var cors = require('cors')
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.dbhost,
  
  port: 3306,
  
  user: process.env.dbuser,
  
  password: process.env.dbpass,
  database: process.env.database
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected to database as id " + connection.threadId + "\n");
  
});



const app = express();
app.use(urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  //console.log('body: ', req.body);
  // console.log('from: ', req.body.From);
  let sender = req.body.From;
  let message = req.body.Body;
  console.log('message variable: ', message);
  console.log('sender variable: ', sender);
  saveMessage(sender, message);
  const twiml = new MessagingResponse();
  
  twiml.message('Your message has been received!');
  
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

function showMessages(){
  var prom = new Promise(function(resolve, reject){
    connection.query("SELECT * from messages;", function(err, res) {
      
      if (err) reject(err);
      console.log("res, ", res);
      
      resolve(res)
    });
  });
  return prom;
};

app.get('/messages', cors(), function (req, res, next) {
  showMessages().then(function(response){
    var messages = response;
    console.log('messages in the get request: ', messages);
    res.json(messages);
  });
  
});




function saveMessage(sender, message) {
  console.log('saveMessagesfunction', sender, message);
  let sql = `INSERT INTO messages(sender,body) VALUES ?`;
  let values = [
    [sender, message]
  ];
  connection.query(sql, [values]);
  
  //showMessages();
  
}

app.options('/message/:id', cors())
app.delete('/message/:id', cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}), function (req, res) {
  console.log(req.body);
  connection.query('DELETE FROM `messages` WHERE `id`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    else{
      res.end('Record has been deleted!');
      
    }
    
  });
});

