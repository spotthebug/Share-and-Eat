var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: {type: String, required: true },
  location: {type: String, required: true},
  mealOfTheDay: String
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;


