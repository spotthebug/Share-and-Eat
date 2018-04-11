var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var shoppingCartSchema = new Schema({
  item: {type: Schema.Types.ObjectId, ref:'MenuItem'},
  total: Number
});

var shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema);

module.exports = shoppingCart;


