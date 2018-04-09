/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static('public'));

////////////////////
//  ROUTES
///////////////////

//-------------Server------------->
app.listen(process.env.PORT || 3000, function(){
  console.log("listening..");
});


