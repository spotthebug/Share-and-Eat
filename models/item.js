var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
  menuItemType: String,
  itemName: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  donation: {type: Number},
  restaurant:  {type: Schema.Types.ObjectId, ref:'Restaurant' },
});

var MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;