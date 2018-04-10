var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
  menuItemType: String,
  itemName: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  menu: {type: Schema.Types.ObjectId, ref:'Menu'},
});

var MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;