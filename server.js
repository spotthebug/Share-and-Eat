/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require("mongoose"),
    //  NEW ADDITIONS
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  MongoStore = require("connect-mongo")(session),
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

var Cart = require('./models/shoppingCart');

app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(session({
  secret: 'share-and-eat',
  resave: false,
  saveUninitialized: false,
  // store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie: {maxAge: 120 * 60 * 1000}
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

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
})

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
      res.render("index", {restaurants: allRestaurants, user: req.user, error: null});
    }
  })
});

app.get("/about", function(req,res) {
  res.render("about", {user: req.user, error: null})
});

// All Restaurants displayed on the home page
app.get("/restaurants", function(req, res) {
  res.redirect({user: req.user}, "/");
});

app.get('/restaurants/:id', function(req, res) {
  restaurantId = req.params.id
  Restaurant.findById((restaurantId), function(err, foundRestaurant) {
    if (err) {
      res.status(500).json({error: err.message});
    }
    else if (foundRestaurant) {
      MenuItem.find({restaurant: foundRestaurant._id}, req.body, {new: true}).populate('restaurant').exec(function(err, allMenuItems) {
        if (err) {
          res.status(500).json({error: err.message});
        }
        else {
          console.log(allMenuItems);

          res.render("show", {menuItems: allMenuItems, restaurant: foundRestaurant, user: req.user});
        }
      });

    }
  })

});

app.get('/add-to-cart/:id', function(req, res) {
  console.log(restaurantId);
  var foodItem = req.params.id;
  console.log(foodItem);
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  MenuItem.findById(foodItem, function(err, item) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(item, item._id);
    req.session.cart = cart;
    console.log(req.session.cart);
  });
});

app.get('/checkout', function(req, res) {
  res.render("checkout", {user: req.user})

})

// Signup
app.get('/signup', function (req, res) {
 res.render('signup', {user: req.user});
});

app.post("/signup", function (req, res) {
  console.log("sanity check!! pre-signup");
  User.register(new User({ username: req.body.username}), req.body.password,
      function (err, newUser) {
        console.log("Check if it enter function to auth");
        console.log("ERROR", err);
        console.log("NEW USER!!",newUser);
        passport.authenticate("local")(req, res, function() {
          res.redirect("/");
        });
      }
  );
});

// Login and Logout

app.post('/login',passport.authenticate('local'), function (req, res){
  res.redirect("/");
});

app.get('/login', function(req, res){
  res.render("login", {user: req.user})
});

app.get('/logout', function (req, res){
  console.log("Before logout", JSON.stringify(req.user));
  req.logout();
  console.log("After logout", JSON.stringify(req.user));
  res.redirect('/')
});

app.listen(process.env.PORT || 3000, function(){
  console.log("listening..");
});


