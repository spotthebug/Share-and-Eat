/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),

    //  NEW ADDITIONS
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static('public'));

// set Models
var db = require('./models'),
  User = db.User,
  Restaurant = db.Restaurant,
  Menu = db.Menu,
  MenuItem = db.MenuItem,
  Order = db.Order;

app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(session({
  secret: 'share-and-eat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// set view engine to ejs
app.set("view engine", "ejs");

// Lower security
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

////////////////////
//  ROUTES
///////////////////

//-------------Server------------->

app.get("/", function(req, res) {
  Restaurant.find(function (err, allRestaurants) {
    console.log(allRestaurants);
    if (err) {
      res.status(500).json({ error: err.message})
    }
    else {
      res.render("index", {restaurants: allRestaurants})
    }
  })

})
app.listen(process.env.PORT || 3000, function(){
  console.log("listening..");
});


