var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var shoppingCartSchema = new Schema({
  item: [{type: Schema.Types.ObjectId, ref:'MenuItem'}],
  // user: {type: Schema.Types.ObjectId, ref:'User'},
  quantity: {type: Number, required: true, default: 0},
  total: Number
});

var shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema);

module.exports = shoppingCart;


