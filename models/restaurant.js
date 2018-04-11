var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
  menuItemType: String,
  itemName: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
});

var MenuSchema = new Schema({
  menuItems: [MenuItemSchema]
});

var RestaurantSchema = new Schema({
  name: {type: String, required: true },
  location: {type: String, required: true},
  mealOfTheDay: String,
  image: String,
  menu: [MenuSchema]
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;


