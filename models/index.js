var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/share-and-eat");

module.exports.User = require("./user");
module.exports.Restaurant = require("./restaurant.js");
module.exports.Menu = require("./menu.js");
module.exports.MenuItem = require("./item.js");
module.exports.Order = require("./order.js");